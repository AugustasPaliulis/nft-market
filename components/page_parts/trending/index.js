import React from "react";

import styles from "./trending.module.css";

import Collection from "../../collection";

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.title_container}>
        <h3>Trending Collection</h3>
        <h5>Checkout our weekly updated trending collection.</h5>
      </div>
      <div className={styles.collections_container}>
        <div>
          <Collection />
        </div>
        <div>
          <Collection />
        </div>
        <div>
          <Collection />
        </div>
      </div>
    </div>
  );
};

export default Trending;
