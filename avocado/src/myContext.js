import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const basename = '/'; // You can set the basename to whatever you need

  return <MyContext.Provider value={{ basename }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
