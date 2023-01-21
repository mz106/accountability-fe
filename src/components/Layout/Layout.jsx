import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Layout = ({ children }) => {
  const { dummyState } = useContext(UserContext);

  return (
    <>
      <Header />
      <h1>{dummyState}</h1>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
