import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <svg viewBox="0 0 49 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 9L0 22V0H13V9Z" />
          <path d="M13.5 48H0V31L30 1H48L13.5 35.5V48Z" />
          <path d="M29.5 29L20.5 38L29.5 47.5H48L29.5 29Z" />
        </svg>
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
