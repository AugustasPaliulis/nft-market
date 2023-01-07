import React from "react";

import styles from "./popup.module.css";

const NftModal = ({ open, close, picture }) => {
  if (!open) return null;
  return (
    <div
      onClick={() => {
        close(false);
      }}
      className={styles.overlay}
    >
      <div className={styles.popup_container}>{picture}</div>
    </div>
  );
};

export default NftModal;
