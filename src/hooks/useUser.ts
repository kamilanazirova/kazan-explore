import { useState, useEffect } from 'react';
import { UserData } from '../__data__/model/common';

const STORAGE_KEY = 'user';

export const useUser = () => {
  const [user, setUser] = useState<UserData>(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error('Error reading user data from localStorage:', error);
      return null;
    }
  });

  const saveUser = (userData : UserData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Error saving user data to localStorage:', error);
    }
  };

  const removeUser = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
    } catch (error) {
      console.error('Error removing user data from localStorage:', error);
    }
  };

  const isAuthenticated = () => {
    return user?.token ? true : false;
  };

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        setUser(storedData ? JSON.parse(storedData) : null);
      } catch (error) {
        console.error('Error syncing with localStorage:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { user, saveUser, removeUser, isAuthenticated };
};
