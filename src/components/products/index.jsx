import React from "react";

import styles from "./index.module.scss";

import { FiArrowRight } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

import sneakerOne from "../../images/sneakers/sneaker-5.svg";
import sneakerTwo from "../../images/sneakers/sneaker-6.svg";
import sneakerThree from "../../images/sneakers/sneaker-7.svg";
import sneakerFour from "../../images/sneakers/sneaker-5.svg";

const Products = () => {
  return (
    <div className={styles.products}>
      <div className="wrapper">
        <div className={styles.products__block}>
          <div className={styles.products__header}>
            <h2 className={styles.products__title}>Featured products</h2>
            <a href="https" className={styles.products__view}>
              View all <FiArrowRight />
            </a>
          </div>
          <div className={styles.products__body}>
            <div className={styles.product}>
              <div className={styles.product__image}>
                <div className={styles.product__gradient} />
                <img src={sneakerOne} alt="" />
              </div>

              <div className={styles.product__rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className={styles.product__description}>
                Adidas Falcon Shoes for men - 2021 Edition
              </p>
              <h2 className={styles.product__price}>$120.50</h2>
            </div>
            <div className={styles.product}>
              <div className={styles.product__image}>
                <div className={styles.product__gradient} />
                <img src={sneakerTwo} alt="" />
              </div>
              <div className={styles.product__rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className={styles.product__description}>
                Adidas Falcon Shoes for men - 2021 Edition
              </p>
              <h2 className={styles.product__price}>$120.50</h2>
            </div>

            <div className={styles.product}>
              <div className={styles.product__image}>
                <div className={styles.product__gradient} />
                <img src={sneakerThree} alt="" />
              </div>
              <div className={styles.product__rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className={styles.product__description}>
                Adidas Falcon Shoes for men - 2021 Edition
              </p>
              <h2 className={styles.product__price}>$120.50</h2>
            </div>

            <div className={styles.product}>
              <div className={styles.product__image}>
                <div className={styles.product__gradient} />
                <img src={sneakerFour} alt="" />
              </div>
              <div className={styles.product__rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className={styles.product__description}>
                Adidas Falcon Shoes for men - 2021 Edition
              </p>
              <h2 className={styles.product__price}>$120.50</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
