import { useState } from "react";

import HomePrivate from "../components/homePrivate/HomePrivate";
import HomePublic from "../components/homePublic/HomePublic";

const Home = () => {
  // Line 8: Not part of the overall logic, just a switch to allow Home Public/Private switch.
  const [testSwitchHome, setTestSwitchHome] = useState(false);

  if (testSwitchHome) {
    return <HomePrivate />;
  } else {
    return <HomePublic />;
  }
};

export default Home;
