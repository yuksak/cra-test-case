import React from "react";

import styles from "./index.module.scss";

import {
  FiHeart,
  FiCheck,
  FiLock,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

import blink from "../../images/decorations/blink.svg";
import whiteDots from "../../images/decorations/white-dots.svg";
import threeDots from "../../images/decorations/three-big-dots.svg";
import gradientShadow from "../../images/decorations/gradient-shadow.svg";
import pinkDots from "../../images/decorations/pink-dots.svg";
import shapeFront from "../../images/decorations/shape-1.svg";
import shapeBack from "../../images/decorations/shape-2.svg";
import sneaker from "../../images/sneakers/sneaker-1.svg";
import userPic from "../../images/pics/user-pic.svg";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className="wrapper">
        <div className={styles.intro__block}>
          <div className={styles.intro__info}>
            <h2 className={styles.intro__title}>Get your awesome sneakers.</h2>
            <p className={styles.intro__text}>
              We offer the best deals in our shop. Check them out now. We have
              awesome stuff on sale for you.
            </p>
            <div className={styles.intro__buttons}>
              <button>Shop Now</button>
              <button>
                <FiHeart />
              </button>
            </div>
            <div className={styles.intro__options}>
              <p>
                <span>
                  <FiCheck />
                </span>
                Free shipping
              </p>
              <p>
                <span>
                  <FiCheck />
                </span>
                Free returns
              </p>
            </div>
          </div>
          <div className={styles.intro__illustration}>
            <img src={gradientShadow} alt="gradientShadow" />
            <img src={shapeBack} alt="shapeBack" />
            <img src={shapeFront} alt="shapeFront" />
            <img src={pinkDots} alt="pinkDots" />
            <img src={blink} alt="blink" />
            <img src={whiteDots} alt="whiteDots" />
            <img src={threeDots} alt="threeDots" />
            <img src={sneaker} alt="sneaker" />
            <div className={styles.intro__message}>
              <div>
                <FiLock />
              </div>
              <div>
                <img src={userPic} alt="userPic" />
                <p>
                  <span>Joan</span> has just purchased these sneakers now.
                </p>
              </div>
            </div>
            <div className={styles.intro__sliders}>
              <button disabled>
                <FiArrowLeftCircle />
              </button>
              <button>
                <FiArrowRightCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
