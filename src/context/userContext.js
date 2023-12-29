'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import authAPI from '@/utils/supabase/api/authApi';
import { serializeUser } from '@/helpers';

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authAPI.getUserFromSession().then((data) => {
      console.log(data);
      console.log(serializeUser(data));
      setCurrentUser(serializeUser(data));
    });
  }, []);

  const logIn = (data) => {
    setCurrentUser(serializeUser(data));
  };

  const logOut = () => {
    setCurrentUser(null);
  };

  const contextValue = useMemo(
    () => ({
      currentUser,
    }),
    [currentUser]
  );

  return (
    <UserContext.Provider value={{ ...contextValue, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
