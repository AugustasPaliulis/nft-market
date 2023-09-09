import { useState } from "react";

import styles from "./Nft.module.css";
import { Roboto } from "@next/font/google";

import Nft from "../../nft";
import Button from "../../button";

const roboto = Roboto({
  weigth: "400",
  subset: ["latin"],
});

const NftInfoBlock = ({ type, id }) => {
  const [name, setName] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.nft_svg}>
        <Nft setName={setName} id={id} />
      </div>
      <div className={styles.info_container}>
        <div className={styles.title_container}>{name}</div>
        <div className={styles.description_container}>
          <p className={roboto.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            varius augue. Nulla nec mauris ac dolor porttitor scelerisque sed
            vitae felis. Pellentesque ut lacinia sem, non semper augue. Etiam
            euismod pretium arcu quis scelerisque. Nullam aliquam euismod est
            nec sollicitudin. Maecenas dolor nulla, sagittis in turpis at,
            aliquam sollicitudin libero. Quisque id mi neque. Nam orci metus,
            malesuada eget aliquet id, semper at magna.
          </p>
        </div>
        <div className={styles.button_container}>
          <Button buttonSize="medium">YUP</Button>
          <Button buttonSize="medium">YUP</Button>
        </div>
      </div>
    </div>
  );
};

export default NftInfoBlock;
