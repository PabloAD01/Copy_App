import React, {createContext, useEffect, useState} from 'react';
import {ApiAuth} from '../../Api';
import {ApiU} from '../../Api';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  name: '',
  email: '',
  LoginWithEmailAndPassword: (email: string, password: string) => {},
  Register: (
    email: string,
    password: string,
    name: string,
    lastName: string,
    location: string,
  ) => {},
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
  setLoginHeight: (loginHeight: number) => {},
  loginHeight: 500,
});

const AuthProvider = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginHeight, setLoginHeight] = useState(500);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(ApiU + '/current-user');
        const data = await response.json();
        setName(data.user.name);
        setEmail(data.user.email);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  const LoginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const response = await fetch(ApiAuth + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      if (response.ok) {
        setLoggedIn(true);
        const data = await response.json();
        console.log(data.msg);
      } else {
        // El inicio de sesión falló
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const Register = async (
    email: string,
    password: string,
    name: string,
    lastName: string,
    location: string,
  ) => {
    try {
      const response = await fetch(ApiAuth + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name, lastName, location}),
      });

      if (response.ok) {
        setEmail(email);
        setLoggedIn(true);
        const data = await response.json();
        console.log(data.msg);
      }
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        LoginWithEmailAndPassword,
        Register,
        loggedIn,
        setLoggedIn,
        setLoginHeight,
        loginHeight,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
