import React, { createContext, useState, useEffect } from 'react';

interface contextUser {
  currentUser: {
    email: string;
    cardId: string;
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string, cardId: string }>>;
}
export const LoginContext = createContext<contextUser>({
  currentUser: null,
  setCurrentUser: () => null
});

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('currentUser'));
    if (storedData) {
      setCurrentUser({ email: storedData.email, cardId: storedData.cardId});
    }
  }, []);

  useEffect(() => {
    if(!currentUser) {
        window.localStorage.removeItem('currentUser');
    }
    else {
      window.localStorage.setItem('currentUser', JSON.stringify({email: currentUser.email, cardId: currentUser.cardId}));
    }
  }, [currentUser]);

  return (
    <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
