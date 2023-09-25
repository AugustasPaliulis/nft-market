import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./trending.module.css";

import Collection from "../../collection";
import NftModal from "../../nft_modal";

const Trending = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPicture, setModalPicture] = useState();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once
  });

  const variants = {
    hidden: { x: -100 },
    visible: { x: 0 },
  };
  return (
    <>
      <div className={styles.trending}>
        <div className={styles.title_container}>
          <h3>Trending Collection</h3>
          <h5>Checkout our weekly updated trending collection.</h5>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
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
        </motion.div>
      </div>
      <NftModal picture={modalPicture} open={showModal} close={setShowModal} />
    </>
  );
};

export default Trending;
