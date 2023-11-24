'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import userAPI from '@/supabase/api/user';

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    userAPI.getFromSession().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const logIn = () => {
    userAPI.getFromSession().then((data) => {
      setCurrentUser(data);
    });
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
