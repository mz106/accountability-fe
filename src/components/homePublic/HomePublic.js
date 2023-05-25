import React from "react";

import Hero from "./hero/Hero";
import HomePublicDesc from "./homePublicDesc/HomePublicDesc";
import HomePublicWhy from "./homePublicWhy/HomePublicWhy";
import HomePublicBottom from "./homePublicBottom/HomePublicBottom";

const HomePublic = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <HomePublicDesc />
      <HomePublicWhy />
      <HomePublicBottom />
    </div>
  );
};

export default HomePublic;
