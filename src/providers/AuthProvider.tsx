import React, {createContext, useState} from 'react';
import {ApiL} from '../../Api';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  LoginWithEmailAndPassword: (email: string, password: string) => {},
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

  const LoginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const response = await fetch(ApiL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      if (response.ok) {
        setEmail(email);
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

  return (
    <AuthContext.Provider
      value={{
        LoginWithEmailAndPassword,
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
