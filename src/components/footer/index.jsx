import React from "react";
import { FiArrowUp, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logo } from "../../images/logos";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__socials}>
          <img src={logo} alt="logo" />
          <p>
            Our shop is the best choice
            <br /> for buying footwear.
          </p>
          <div>
            <Link>
              <FiTwitter />
            </Link>

            <Link>
              <FiFacebook />
            </Link>

            <Link>
              <FiInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.footer__home}>
          <h3>Home</h3>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        <div className={styles.footer__info}>
          <h3>Our Information</h3>
          <ul>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        <div className={styles.footer__account}>
          <h3>My Account</h3>
          <ul>
            <li>Press Inquiries</li>
            <li>Social Media Directories</li>
            <li>Permission</li>
            <li>Requests</li>
          </ul>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer__copyright}>
        <p>© 2021 Shop. Made with love for Brightscout </p>
        <button type="button">
          <FiArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
