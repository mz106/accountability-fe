import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const copyRight = "\u{00A9}";

  return (
    <div className="footer-wrapper-outer">
      <div className="footer-wrapper-inner">
        <div className="footer-title-wrapper">
          <p>
            App Name <span>{copyRight}</span>
          </p>
        </div>
        <div className="footer-socials-wrapper">
          <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />
          <FontAwesomeIcon icon={faFacebook} className="footer-social-icon" />
          <FontAwesomeIcon icon={faLinkedin} className="footer-social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
