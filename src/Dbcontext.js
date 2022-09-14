import { createContext, useContext, useState } from "react";

const _createContext = createContext();

// export const useCreateContext = () => useContext({ isClick, setIsClick });

const CreateContextProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(false);
  const value = { isClick, setIsClick };

  return (
    <_createContext.Provider value={value}>{children}</_createContext.Provider>
  );
};

export default CreateContextProvider;
