import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title-wrapper">
        <div className="header-logo-wrapper">
          <img
            src="testlogo.jpg"
            alt="a standin for a logo"
            className="header-logo-img"
          />
        </div>
        <div>
          <p>App Name</p>
        </div>
      </div>

      <div className="header-login-sign-menu">
        <div>Sign-up</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
