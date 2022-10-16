import React from "react";

import { FiArrowRight } from "react-icons/fi";
import styles from "./index.module.scss";

import { BsStarFill } from "react-icons/bs";
import sneakerOne from "../../images/sneakers/sneaker-3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Arrivals = () => {
  return (
    <div className={styles.arrivals}>
      <div className="wrapper">
        <div className={styles.arrivals__header}>
          <div>
            <h2 className={styles.arrivals__title}>New arrivals</h2>
            <p className={styles.arrivals__text}>
              Enjoy the new products from our store. <br />
              Select what you like, enjoy & return.
            </p>
          </div>
          <a href="https" className={styles.arrivals__view}>
            View all <FiArrowRight />
          </a>
        </div>
        <div className={styles.arrivals__body}>
          <Swiper
            breakpoints={{
              1250: {
                slidesPerView: 4,
                spaceBetweenSlides: 50,
              },
              920: {
                slidesPerView: 3,
                spaceBetweenSlides: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetweenSlides: 0,
              },

              100: {
                slidesPerView: 1,
                spaceBetweenSlides: 0,
              },
            }}
            // spaceBetween={50}
            // slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className={styles.arrival}>
                <div className={styles.arrival__header}>
                  <p>01</p>
                  <img src={sneakerOne} alt="" />
                  <button>+</button>
                </div>

                <div className={styles.arrival__rating}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={styles.arrival__description}>
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h2 className={styles.arrival__price}>$120.50</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.arrival}>
                <div className={styles.arrival__header}>
                  <p>01</p>
                  <img src={sneakerOne} alt="" />
                  <button>+</button>
                </div>

                <div className={styles.arrival__rating}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={styles.arrival__description}>
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h2 className={styles.arrival__price}>$120.50</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.arrival}>
                <div className={styles.arrival__header}>
                  <p>01</p>
                  <img src={sneakerOne} alt="" />
                  <button>+</button>
                </div>

                <div className={styles.arrival__rating}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={styles.arrival__description}>
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h2 className={styles.arrival__price}>$120.50</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.arrival}>
                <div className={styles.arrival__header}>
                  <p>01</p>
                  <img src={sneakerOne} alt="" />
                  <button>+</button>
                </div>

                <div className={styles.arrival__rating}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={styles.arrival__description}>
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h2 className={styles.arrival__price}>$120.50</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.arrival}>
                <div className={styles.arrival__header}>
                  <p>01</p>
                  <img src={sneakerOne} alt="" />
                  <button>+</button>
                </div>

                <div className={styles.arrival__rating}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={styles.arrival__description}>
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h2 className={styles.arrival__price}>$120.50</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
