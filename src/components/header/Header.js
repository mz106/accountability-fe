import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-wrapper-outer">
      <div className="header-wrapper-inner">
        <div className="header-title-wrapper">
          <div className="header-logo-wrapper">
            <FontAwesomeIcon icon={faCoffee} className="header-logo" />
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
    </div>
  );
};

export default Header;
