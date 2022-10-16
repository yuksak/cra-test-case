import React from "react";

import styles from "./index.module.scss";

import footballKit from "../../images/pics/ball-pic.svg";
import volleyballKit from "../../images/pics/jersey-pic.svg";
import whiteDots from "../../images/decorations/white-dots.svg";
import threeDots from "../../images/decorations/three-big-dots.svg";

const Accessories = () => {
  return (
    <div className={styles.accessories}>
      <div className={styles.football}>
        <div className={styles.football__image}>
          <img src={whiteDots} alt="" />
          <img src={threeDots} alt="" />
          <img src={footballKit} alt="" />
        </div>
        <div className={styles.football__info}>
          <p className={styles.football__category}>Accessories</p>
          <h2 className={styles.football__title}>Football</h2>
          <p className={styles.football__description}>
            We receive new sportwear every day. Just take your pick.
          </p>
          <button className={styles.football__button}>Shop Now</button>
        </div>
      </div>
      <div className={styles.volleyball}>
        <div className={styles.volleyball__image}>
          <img src={whiteDots} alt="" />
          <img src={threeDots} alt="" />
          <img src={volleyballKit} alt="" />
        </div>
        <div className={styles.volleyball__info}>
          <p className={styles.volleyball__category}>Accessories</p>
          <h2 className={styles.volleyball__title}>Volleyball</h2>
          <p className={styles.volleyball__description}>
            We receive new sportwear every day. Just take your pick.
          </p>
          <button className={styles.volleyball__button}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
