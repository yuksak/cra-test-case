import React from "react";

import styles from "./index.module.scss";
import ToggleSwitch from "../UI/toggleSwitch";
import sneaker from "../../images/sneakers/sneaker-5.svg";

import { BsStarFill } from "react-icons/bs";

const Trend = () => {
  return (
    <div className={styles.trend}>
      <div className="wrapper">
        <div className={styles.trend__block}>
          <div className={styles.trend__header}>
            <h2>Best seller this week</h2>
            <label>
              Men <ToggleSwitch /> Women
            </label>
          </div>
          <div className={styles.trend__body}>
            <div className={styles.trend__image}>
              <img src={sneaker} alt="" />
              <div></div>
            </div>
            <div className={styles.trend__product}>
              <div>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>Adidas Falcon Shoes for men - 2021 Edition</p>
              <h2>$120.50</h2>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
