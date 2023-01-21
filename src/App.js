import logo from "./logo.svg";
import "./App.css";

import { useContext } from "react";
import { UserContext } from "./context/userContext";
import Layout from "./components/Layout/Layout";

function App() {
  const { dummyState } = useContext(UserContext);

  return (
    <div className="App">
      <Layout>
        <h1>{dummyState}</h1>
      </Layout>
    </div>
  );
}

export default App;
