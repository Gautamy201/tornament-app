import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userDetail, setUserDetails] = useState([]);

  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (userInfo, login) => {
    setIsLogin(login);
    setUserDetails(...userDetail, userInfo);
  };
  const logout = () => {
    setIsLogin(false);
    setUserDetails([]);
  };
  const adminLogin = () => {
    setIsAdmin(true);
  };
  return (
    <AppContext.Provider
      value={{ userDetail, login, logout, isLogin, isAdmin, adminLogin }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global hook

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
