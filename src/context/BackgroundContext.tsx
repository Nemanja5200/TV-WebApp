import React, { createContext, useState, useContext, ReactNode } from "react";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundImg, setBackgroundImg] = useState<string | undefined>(
    IMAGE_PATHS.TV_BACKGROUND,
  );
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    "#151515",
  );

  return (
    <BackgroundContext.Provider
      value={{
        backgroundImg,
        backgroundColor,
        setBackgroundImg,
        setBackgroundColor,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error(
      "useBackgroundContext must be used within a BackgroundProvider",
    );
  }
  return context;
};
