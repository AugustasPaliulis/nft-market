import React, { useState } from "react";

import styles from "./trending.module.css";

import Collection from "../../collection";
import NftModal from "../../nft_modal";

const Trending = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPicture, setModalPicture] = useState();

  return (
    <>
      <div className={styles.trending}>
        <div className={styles.title_container}>
          <h3>Trending Collection</h3>
          <h5>Checkout our weekly updated trending collection.</h5>
        </div>
        <div className={styles.collections_container}>
          <div className={styles.seperate_collection}>
            <Collection
              setModalPicture={setModalPicture}
              showModal={setShowModal}
              type="animals"
            />
          </div>
          <div className={styles.seperate_collection}>
            <Collection
              setModalPicture={setModalPicture}
              showModal={setShowModal}
              type="mushrooms"
            />
          </div>
          <div className={styles.seperate_collection}>
            <Collection
              setModalPicture={setModalPicture}
              showModal={setShowModal}
              type="disco"
            />
          </div>
        </div>
      </div>
      <NftModal picture={modalPicture} open={showModal} close={setShowModal} />
    </>
  );
};

export default Trending;
