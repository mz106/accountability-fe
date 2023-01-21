import logo from "./logo.svg";
import "./App.css";

import Layout from "./components/Layout/Layout";
import { UserContextProvider } from "./context/userContext.jsx";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Layout />
      </UserContextProvider>
    </div>
  );
}

export default App;
