import { useState } from "react";
import { dataContext } from "./contexts/dataContext";

const Provider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState("weekly");

  return (
    <dataContext.Provider
      value={{
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default Provider;
