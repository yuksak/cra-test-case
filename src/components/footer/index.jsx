import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { FiArrowUp, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__socials}>
          <svg
            className={styles.footer__logo}
            viewBox="0 0 49 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 9L0 22V0H13V9Z" />
            <path d="M13.5 48H0V31L30 1H48L13.5 35.5V48Z" />
            <path d="M29.5 29L20.5 38L29.5 47.5H48L29.5 29Z" />
          </svg>
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
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
          }
        >
          <FiArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
