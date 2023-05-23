import React from "react";

import Hero from "./hero/Hero";
import HomePublicDesc from "./homePublicDesc/HomePublicDesc";
import HomePublicWhy from "./homePublicWhy/HomePublicWhy";
import HomePublicBottom from "./homePublicBottom/HomePublicBottom";

const HomePublic = () => {
  return (
    <>
      <Hero />
      <HomePublicDesc />
      <HomePublicWhy />
      <HomePublicBottom />
    </>
  );
};

export default HomePublic;
