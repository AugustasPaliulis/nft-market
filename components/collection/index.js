import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./collection.module.css";
import NftModal from "../nft_modal";

import MrFox from "../../styles/avatars/MrFox.svg";
import Bear from "../../styles/images/animals_collection/bear.svg";
import Cat from "../../styles/images/animals_collection/cat.svg";
import Dog from "../../styles/images/animals_collection/dog.svg";

import Shroomie from "../../styles/avatars/Shroomie.svg";
import Mushroom1 from "../../styles/images/mushrooms_collection/first_mushroom.svg";
import Mushroom2 from "../../styles/images/mushrooms_collection/second_mushroom.svg";
import Mushroom3 from "../../styles/images/mushrooms_collection/third_mushroom.svg";

import BeKind2Robots from "../../styles/avatars/BeKind2Robots.svg";
import Disco1 from "../../styles/images/disco_collection/first_disco.svg";
import Disco2 from "../../styles/images/disco_collection/second_disco.svg";
import Disco3 from "../../styles/images/disco_collection/third_disco.svg";

const collections = [
  {
    type: "animals",
    0: <Dog id="#0"/>,
    1: <Cat id="#1"/>,
    2: <Bear id="#2"/>,
    title: "DSGN Animals",
    authorIcon: <MrFox />,
    authorName: "MrFox",
  },
  {
    type: "mushrooms",
    0: <Mushroom1 id="#3"/>,
    1: <Mushroom2 id="#4"/>,
    2: <Mushroom3 id="#5"/>,
    title: "Magic Mushrooms",
    authorIcon: <Shroomie />,
    authorName: "Shroomie",
  },
  {
    type: "disco",
    0: <Disco1 id="#6"/>,
    1: <Disco2 id="#7"/>,
    2: <Disco3 id="#8"/>,
    title: "Disco Machines",
    authorIcon: <BeKind2Robots />,
    authorName: "BeKind2Robots",
  },
];

const Collection = ({ type, showModal, setModalPicture }) => {
  const collectionType = collections.find((item) => item.type === type)
    ? collections.find((item) => item.type === type)
    : collections[0];
  const pictureNumbers = [0, 1, 2];
  const [number, setNumber] = useState();
  useEffect(() => {
    setNumber(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
  }, []);
  pictureNumbers.splice(number, 1);

  console.log(collectionType[number])
  return (
    <div className={styles.collection_layout}>
      <div
        
        className={styles.big_picture}
      >
        <Link href={{pathname: "/nft", query: {type: type, id: collectionType[number] ? collectionType[number].props.id : null}}}>
        {collectionType[number]}
        </Link>
      </div>
      <div className={styles.small_picture_container}>
        {/* SMALL PICTURES */}
        <div
          
          className={styles.small_picture}
        >
          <Link href={{pathname: "/nft", query: {type: type, id: collectionType[number] ? collectionType[number].props.id : null}}}>
          {collectionType[pictureNumbers[0]]}
          </Link>
        </div>
        <div
          
          className={styles.small_picture}
        >
          <Link href={{pathname: "/nft", query: {type: type, id: collectionType[number] ? collectionType[number].props.id : null}}}>
          {collectionType[pictureNumbers[1]]}
          </Link>
        </div>
        <div className={styles.small_collection_more}>
          <h5>1025+</h5>
        </div>
      </div>
      <div className={styles.info_container}>
        <h5>{collectionType.title}</h5>
        <div className={styles.author_container}>
          {collectionType.authorIcon}
          <h6>{collectionType.authorName}</h6>
        </div>
      </div>
    </div>
  );
};

export default Collection;
