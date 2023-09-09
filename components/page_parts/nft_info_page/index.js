import { useState } from "react";

import styles from "./Nft.module.css";
import { Work_Sans, Space_Mono } from "next/font/google";

import Nft from "../../nft";
import Button from "../../button";
import ArrowRight from "../../../styles/icons/ArrowRight.svg";

const workSans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

const spaceMonoHeavy = Space_Mono({
  weight: "700",
  subsets: ["latin"],
});

const NftInfoBlock = ({ type, id }) => {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.nft_svg}>
        <Nft setAuthor={setAuthor} setName={setName} id={id} />
      </div>
      <div className={styles.info_container}>
        <div className={styles.title_container}>{name}</div>
        <p className={`${workSans.className} ${styles.date}`}>
          Minted on Sep 30, 2022
        </p>
        <div className={styles.description_container}>
          <div className={styles.author}>
            <p
              className={`${spaceMono.className} ${styles.description_dark_text}`}
            >
              Created by
            </p>
            {author}
          </div>
          <p
            className={`${spaceMono.className} ${styles.description_dark_text}`}
          >
            Description
          </p>
          <p className={workSans.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            varius augue. Nulla nec mauris ac dolor porttitor scelerisque sed
            vitae felis. Pellentesque ut lacinia sem, non semper augue. Etiam
            euismod pretium arcu quis scelerisque. Nullam aliquam euismod est
            nec sollicitudin. Maecenas dolor nulla, sagittis in turpis at,
            aliquam sollicitudin libero. Quisque id mi neque. Nam orci metus,
            malesuada eget aliquet id, semper at magna.
          </p>
        </div>
        <div className={styles.description_buttons_container}>
          <div className={styles.button_container}>
            <div
              className={`${styles.auction_time_container} ${spaceMono.className}`}
            >
              <p>Biding hasn't started yet</p>
              <div
                className={`${styles.auction_time} ${spaceMonoHeavy.className}`}
              >
                {" "}
                00:00:00
              </div>
            </div>
            <Button disabled className={styles.button} buttonSize="medium">
              Place bid
            </Button>
          </div>
          <Button
            className={styles.collection_button}
            buttonStyle="outline"
            buttonSize="small"
          >
            <ArrowRight />
            Go to collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NftInfoBlock;
