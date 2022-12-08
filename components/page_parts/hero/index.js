import styles from "./Hero.module.css";
import HeroImage from "../../../styles/images/Hero_NFT Card.svg";
import Avatar from "../../../styles/avatars/Avatar #14.svg";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_info_container}>
        <h1>HERO</h1>
        <h5>DESCRIPTION</h5>
      </div>
      <div className={styles.hero_image_container}>
        <div className={styles.hero_image_card}>
          <HeroImage />
          <div className={styles.hero_image_card_bottom}>
            <h5>Space Walking</h5>
            <div className={styles.hero_image_author}>
              <Avatar width="24px" height="24px" />
              AnimaKid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
