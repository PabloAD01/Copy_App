import React, {createContext, useEffect, useState} from 'react';
import {Api, ApiAuth} from '../../Api';
import {ApiU} from '../../Api';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  name: '',
  email: '',
  location: '',
  LoginWithEmailAndPassword: (email: string, password: string) => {},
  Register: (
    email: string,
    password: string,
    name: string,
    lastName: string,
    location: string,
  ) => {},
  PostAd: (
    title: string,
    description: string,
    price: number,
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
  const [location, setLocation] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginHeight, setLoginHeight] = useState(500);

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
        try {
          const response = await fetch(ApiU + '/current-user');
          const data = await response.json();
          setName(data.user.name);
          setEmail(data.user.email);
          setLocation(data.user.location);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
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
        setLoggedIn(true);
        const data = await response.json();
        console.log(data.msg);
        try {
          const response = await fetch(ApiU + '/current-user');
          const data = await response.json();
          setName(data.user.name);
          setEmail(data.user.email);
          setLocation(data.user.location);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };

  const PostAd = async (
    title: string,
    description: string,
    price: number,
    location: string,
  ) => {
    try {
      const response = await fetch(Api + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, description, price, location}),
      });
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        PostAd,
        name,
        email,
        location,
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
