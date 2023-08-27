import React from "react";
import Button from "../button";

import styles from "./popup.module.css";
import Info from "../../styles/icons/info-solid.svg";

const NftModal = ({ open, close, picture }) => {
  return null;
  return (
    <div
      onClick={() => {
        close(false);
      }}
      className={styles.overlay}
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_picture_container}>{picture}</div>
        <div className={styles.modal_info_container}>
          <div className={styles.modal_info_title}>
            <h4>NFT NAME</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a porta sem. Nulla facilisi. Proin ultricies rhoncus
              cursus. Donec condimentum lacus id sapien scelerisque, ac rutrum
              nisl rutrum. Morbi eu suscipit erat, id pretium est.
            </h6>
          </div>
          <div className={styles.modal_info_button}>
            {" "}
            <Button buttonSize="small">
              <Info />
              NFT PAGE
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftModal;
