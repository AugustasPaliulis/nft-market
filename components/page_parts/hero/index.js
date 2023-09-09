import styles from "./Hero.module.css";
import HeroImage from "../../../styles/images/Hero_NFT Card.svg";
import Avatar from "../../../styles/avatars/Avatar #14.svg";
import Button from "../../button";
import RocketLaunch from "../../../styles/icons/RocketLaunch.svg";

import React from "react";
import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

const Hero = () => {
  const isBreakpoint = useMediaQuery(1130);
  return (
    <>
      <div className={`${styles.hero_container}`}>
        <div className={styles.hero_info_container}>
          <h1>Discover digital art & Collect NFTs</h1>
          <h5>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </h5>
          <Button buttonSize={isBreakpoint ? "medium" : null}>
            <RocketLaunch className="mg-r-10" />
            Get Started
          </Button>
          <div className={styles.hero_info_ratings}>
            <ul>
              <li>
                <h4>240k+</h4>Total Sales
              </li>
              <li>
                <h4>100k+</h4>Auctions
              </li>
              <li>
                <h4>240k+</h4>Artists
              </li>
            </ul>
          </div>
        </div>
        {/* IMAGE OF HERO */}
        <div className={styles.hero_image_container}>
          <div className={styles.hero_image_card}>
            <div className={styles.hero_main_image_card}>
              <HeroImage />
            </div>
            <div className={styles.hero_image_card_bottom}>
              <h5>Space Walking</h5>
              <div className={styles.hero_image_author}>
                <Avatar className="mg-r-10" width="24px" height="24px" />
                AnimaKid
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
