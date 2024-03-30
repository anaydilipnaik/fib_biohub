// Context.js
import React, { createContext, useContext, useState } from "react";

const NContext = createContext();

export const NProvider = ({ children }) => {
  const [n, setN] = useState("");

  return <NContext.Provider value={{ n, setN }}>{children}</NContext.Provider>;
};

export const useN = () => useContext(NContext);
