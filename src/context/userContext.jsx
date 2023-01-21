import { useState, createContext } from "react";

///////////////////////////////

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [dummyState, setDummyState] = useState(
    "Dummy string from useContext.jsx"
  );

  return (
    <UserContext.Provider value={{ dummyState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
