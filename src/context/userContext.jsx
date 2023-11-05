import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserOnDataBase,
} from "../utils/firebase";

export const UserContext = createContext({
  userAtual: null,
  setUserAtual: () => null,
});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userAtual, setUserAtual] = useState(null);
  const value = { userAtual, setUserAtual };

  useEffect(() => {
    const exit = onAuthStateChangedListener((user) => {
      if (user) {
        createUserOnDataBase(user);
      }
      setUserAtual(user);
    });

    return exit;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
