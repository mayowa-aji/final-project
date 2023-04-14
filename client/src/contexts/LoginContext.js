import React, { createContext, useState } from 'react';

export const LoginContext = createContext({
  showLogin: null,
  setShowLogin: () => {},
});

export const LoginProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
};
