import React, { createContext, useState, useEffect } from 'react';

interface contextUser {
  currentUser: {
    email: string;
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string}>>;
}
export const LoginContext = createContext<contextUser>({
  currentUser: null,
  setCurrentUser: () => null
});

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('user'));
    if (storedData) {
      setCurrentUser({ email: storedData.email});
    }
  }, []);

  useEffect(() => {
    console.log("local stogage, user: ", currentUser);
    if(!currentUser) {
        window.localStorage.removeItem('user');
    }
    else {
      window.localStorage.setItem('user', JSON.stringify({email: currentUser.email}));
    }
  }, [currentUser]);

  return (
    <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
