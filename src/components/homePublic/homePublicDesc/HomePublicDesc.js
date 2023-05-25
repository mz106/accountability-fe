import "./HomePublicDesc.css";

const HomePublicDesc = () => {
  return (
    <div className="home-public-desc-wrapper">
      <div className="home-public-desc-title-container">
        <h2 className="home-public-desc-title">Who are we??</h2>
      </div>
      <div className="home-public-desc-text-container">
        <p className="home-public-desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in
        </p>
      </div>
      <div className="home-public-desc-imgs-container">
        <div className="home-public-desc-img-container">
          <img
            src="/images/homePagePublic/hero/hero1.jpg"
            alt="happy stuff"
            className="home-public-desc-img"
          />
        </div>
        <div className="home-public-desc-img-container">
          <img
            src="/images/homePagePublic/hero/hero1.jpg"
            alt="happy stuff"
            className="home-public-desc-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePublicDesc;
