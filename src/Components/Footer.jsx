import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <a href="index.php">
              <img src="images/footer-logo.png" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 text-center">
            <ul className="f-links">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 text-center">
            <p className="social-heading mt-0">Connect with us</p>
            <ul className="socials-footer">
              <li>
                <a href="https://twitter.com/fireupdesign?s=08" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/fireupdesign/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fireupdesign?igshid=198v0grqib17l"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copyright">
            Copyright {new Date().getFullYear()} Fire up Design. All Right
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
