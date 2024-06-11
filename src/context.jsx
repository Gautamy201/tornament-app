import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userDetail, setUserDetails] = useState([]);

  const [isLogin, setIsLogin] = useState(false);

  const login = (userInfo, login) => {
    setIsLogin(login);
    setUserDetails(...userDetail, userInfo);
  };
  const logout = () => {
    setIsLogin(false);
    setUserDetails([]);
  };
  return (
    <AppContext.Provider value={{ userDetail, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

// global hook

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
