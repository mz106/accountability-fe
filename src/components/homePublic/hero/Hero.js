import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-text-container">
          <h2 className="hero-text">A snappy line about what the app does.</h2>
        </div>
        <div className="hero-img-container">
          <img
            alt="something sweet"
            src="./images/homePagePublic/hero/hero1.jpg"
            className="hero-img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
