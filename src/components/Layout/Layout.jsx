import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserContext from "../../context/userContext";

const Layout = ({ children }) => {
  const [dummyState, setDummyState] = useState(
    "Dummy state string from layout.jsx"
  );

  return (
    <>
      <UserContext.Provider value={{ dummyState, setDummyState }}>
        <Header />
        <h1>{dummyState}</h1>
        <main>{children}</main>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default Layout;
