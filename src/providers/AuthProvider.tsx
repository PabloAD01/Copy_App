import React, {createContext, useEffect, useState} from 'react';
import {Api, ApiAuth} from '../../Api';
import {ApiU} from '../../Api';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  id: '',
  name: '',
  email: '',
  location: '',
  error: null as string | null,
  LoginWithEmailAndPassword: (email: string, password: string) => {},
  Register: (
    email: string,
    password: string,
    name: string,
    lastName: string,
    location: string,
  ) => {},
  updateUser: (
    name: string,
    phone: number,
    location: string,
    password: string,
  ) => {},
  PostAd: (
    owner: string,
    title: string,
    description: string,
    price: number,
    location: string,
    category: string,
    images: string[],
  ) => {},
  deleteProduct: (productId: string) => {},
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
  setLoginHeight: (loginHeight: number) => {},
  loginHeight: 500,
  logoutUser: () => {},
  setError: (error: string | null) => {},
});

const AuthProvider = (props: Props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginHeight, setLoginHeight] = useState(500);
  const [error, setError] = useState<string | null>(null);

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
        setError(null);
        const data = await response.json();
        console.log(data.msg);
        try {
          const response = await fetch(ApiU + '/current-user');
          const data = await response.json();
          setId(data.user._id);
          setName(data.user.name);
          setEmail(data.user.email);
          setLocation(data.user.location);
          console.log(data);
        } catch (error) {
          console.error('Error al obtener usuario1:', error);
        }
      } else {
        const errorData = await response.json();
        setError(errorData.msg);
      }
    } catch (error) {
      console.error('Error al iniciar sesión3:', error);
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
          setId(data.user._id);
          setName(data.user.name);
          setEmail(data.user.email);
          setLocation(data.user.location);
          console.log('PERSONAL DATA', data);
        } catch (error) {
          const errorData = await response.json();
          setError(errorData.msg);
        }
      }
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };

  const updateUser = async (
    name: string,
    phone: number,
    location: string,
    password: string,
  ) => {
    try {
      const response = await fetch(ApiU + '/update-user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          location,
          password,
        }),
      });
    } catch (error) {}
  };

  const PostAd = async (
    owner: string,
    title: string,
    description: string,
    price: number,
    location: string,
    category: string,
    images: string[],
  ) => {
    try {
      const response = await fetch(Api + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          owner,
          title,
          description,
          price,
          location,
          category,
          images,
        }),
      });
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };

  const logoutUser = async () => {
    setLoggedIn(false);
    setId('');
    setName('');
    setEmail('');
    setLocation('');
    try {
      const response = await fetch(ApiAuth + '/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error hacer registro:', error);
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      const response = await fetch(`${Api}/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Actualizar la lista de productos después de eliminar
        // Puedes implementar lógica adicional si es necesario
        // Ejemplo: Recargar la lista de productos
        // const updatedProducts = await fetch(Api + '/products');
        // const data = await updatedProducts.json();
        // setProducts(data.products);
      } else {
        const errorData = await response.json();
        setError(errorData.msg);
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        id,
        name,
        email,
        location,
        error,
        LoginWithEmailAndPassword,
        Register,
        updateUser,
        logoutUser,
        PostAd,
        deleteProduct,
        loggedIn,
        setLoggedIn,
        setLoginHeight,
        loginHeight,
        setError,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
