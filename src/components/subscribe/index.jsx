import React from "react";

import styles from "./index.module.scss";
import sneakerOne from "../../images/sneakers/sneaker-3.svg";

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe__block}>
        <div className="wrapper">
          <div className={styles.subscribe__content}>
            <h2 className={styles.subscribe__title}>
              Subscribe now to get the latest updates
            </h2>
            <div className={styles.subscribe__action}>
              <input placeholder="Enter you email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.subscribe__media}>
            <div className={styles.subscribe__gradient}></div>
            <img src={sneakerOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
