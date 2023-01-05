import React, { useEffect, useState } from "react";

import styles from "./collection.module.css";

import Bear from "../../styles/images/animals_collection/bear.svg";
import Cat from "../../styles/images/animals_collection/cat.svg";
import Dog from "../../styles/images/animals_collection/dog.svg";

const Collection = () => {
  const pictures = [<Dog />, <Cat />, <Bear />];
  const pictureNumbers = [0, 1, 2];
  const [number, setNumber] = useState();
  useEffect(() => {
    setNumber(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
  }, []);

  pictureNumbers.splice(number, 1);

  return (
    <div className={styles.collection_layout}>
      <div className={styles.big_picture}>{pictures[number]}</div>
      <div className={styles.small_picture_container}>
        {/* SMALL PICTURES */}
        <div className={styles.small_picture}>
          {pictures[pictureNumbers[0]]}
        </div>
        <div className={styles.small_picture}>
          {pictures[pictureNumbers[1]]}
        </div>
        <div className={styles.small_collection_more}>
          <h5>1025+</h5>
        </div>
      </div>
    </div>
  );
};

export default Collection;
