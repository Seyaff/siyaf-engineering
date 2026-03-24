"use client";

import React, { createContext, useContext, useState } from "react";

type IntroContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IntroContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const context = useContext(IntroContext);
  if (!context) throw new Error("useIntro must be used within IntroProvider");
  return context;
};
