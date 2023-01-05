import React, { useEffect, useState } from "react";

import styles from "./collection.module.css";

import "./imports";

import Bear from "../../styles/images/animals_collection/bear.svg";
import Cat from "../../styles/images/animals_collection/cat.svg";
import Dog from "../../styles/images/animals_collection/dog.svg";

import Mushroom1 from "../../styles/images/mushrooms_collection/first_mushroom.svg";
import Mushroom2 from "../../styles/images/mushrooms_collection/second_mushroom.svg";
import Mushroom3 from "../../styles/images/mushrooms_collection/third_mushroom.svg";

import Disco1 from "../../styles/images/disco_collection/first_disco.svg";
import Disco2 from "../../styles/images/disco_collection/second_disco.svg";
import Disco3 from "../../styles/images/disco_collection/third_disco.svg";

const test = [
  { key: 1, type: "animals", 0: <Dog />, 1: <Cat />, 2: <Bear /> },
  {
    key: 2,
    type: "mushrooms",
    0: <Mushroom1 />,
    1: <Mushroom2 />,
    2: <Mushroom3 />,
  },
  { key: 3, type: "disco", 0: <Disco1 />, 1: <Disco2 />, 2: <Disco3 /> },
];
const pictures = [<Dog />, <Cat />, <Bear />];

const Collection = ({ type }) => {
  const collectionType = test.find((item) => item.type === type)
    ? test.find((item) => item.type === type)
    : test[0];
  const pictureNumbers = [0, 1, 2];
  const [number, setNumber] = useState();
  useEffect(() => {
    setNumber(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
  }, []);

  pictureNumbers.splice(number, 1);

  return (
    <div className={styles.collection_layout}>
      <div className={styles.big_picture}>{collectionType[number]}</div>
      <div className={styles.small_picture_container}>
        {/* SMALL PICTURES */}
        <div className={styles.small_picture}>
          {collectionType[pictureNumbers[0]]}
        </div>
        <div className={styles.small_picture}>
          {collectionType[pictureNumbers[1]]}
        </div>
        <div className={styles.small_collection_more}>
          <h5>1025+</h5>
        </div>
      </div>
    </div>
  );
};

export default Collection;
