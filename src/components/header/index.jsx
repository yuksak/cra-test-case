import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { logo } from "../../images/logos";

import styles from "./index.module.scss";

import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const { pathname } = useLocation();

  const setActiveLink = (link) => {
    return pathname === link ? styles.activeLink : "";
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav
        className={
          hamburger
            ? `${styles.header__nav} ${styles.activeBurgerNav}`
            : styles.header__nav
        }
      >
        <ul className={hamburger ? styles.activeBurgerList : ""}>
          <li className={setActiveLink("/")}>
            <Link to="/" end>
              Footwear
            </Link>
          </li>
          <li className={setActiveLink("/about-us")}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={setActiveLink("/products")}>
            <Link to="/products">Products</Link>
          </li>
          <li className={setActiveLink("/sale")}>
            <Link to="/sale">Sale</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.header__buttons}>
        <button className={styles.searchButton}>
          <FiSearch />
        </button>
        <button className={styles.profileButton}>
          <FiUser />
        </button>
        <button className={styles.bucketButton}>
          <FiShoppingBag />
          <span className={styles.bucketButton__number}>1</span>
        </button>
        <button
          className={styles.menuButton}
          onClick={() => setHamburger(!hamburger)}
        >
          {!hamburger ? <HiOutlineMenuAlt4 /> : <HiX />}
        </button>
      </div>
    </div>
  );
};

export default Header;
