import React, { createContext, useState, useEffect } from 'react';
import { UserData } from '../__data__/model/common';

interface UserContext {
  currentUser: UserData
  setCurrentUser: React.Dispatch<React.SetStateAction<UserData>>;
}
export const LoginContext = createContext<UserContext>({
  currentUser: null,
  setCurrentUser: () => null
});

const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('user'));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  useEffect(() => {
    if (!userData) {
      window.localStorage.removeItem('user');
    }
    else {
      window.localStorage.setItem('user', userData);
    }
  }, [userData]);

  return (
    <LoginContext.Provider value={{ currentUser: userData, setCurrentUser: setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
