import { Work_Sans, Space_Mono } from "next/font/google";

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

import styles from "./nft.module.css";
import Link from "next/link";

const workSans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

const collections = [
  {
    type: "animals",
    nfts: [
      <Dog key="#0" id="#0" name="DigiPup Portraits" />,
      <Cat key="#1" id="#1" name="WhiskerArt Wonders" />,
      <Bear key="#2" id="#2" name="BearVista Visions" />,
    ],
    title: "DSGN Animals",
    authorIcon: <MrFox />,
    authorName: "MrFox",
  },
  {
    type: "mushrooms",
    nfts: [
      <Mushroom1 key="#3" id="#3" name="Enchanted Spore Serenade" />,
      <Mushroom2 key="#4" id="#4" name="Fungi Fantasy Forge" />,
      <Mushroom3 key="#5" id="#5" name="MycoMystic Dreamscapes" />,
    ],
    title: "Magic Mushrooms",
    authorIcon: <Shroomie />,
    authorName: "Shroomie",
  },
  {
    type: "disco",
    nfts: [
      <Disco1 key="#6" id="#6" name="Mechanical Masterpieces" />,
      <Disco2 key="#7" id="#7" name="RoboCanvas Realms" />,
      <Disco3 key="#8" id="#8" name="AI Artifacts Archive" />,
    ],
    title: "Disco Machines",
    authorIcon: <BeKind2Robots />,
    authorName: "BeKind2Robots",
  },
];

// getting NFT based on ID

const Nft = ({ setAuthor, setName, id, type }) => {
  const findComponentById = (id) => {
    for (const collection in collections) {
      for (const key in collections[collection].nfts) {
        if (
          collections[collection].nfts[key].props &&
          collections[collection].nfts[key].props.id === id
        ) {
          setName(collections[collection].nfts[key].props.name);
          setAuthor(collections[collection].authorName);
          return collections[collection].nfts[key];
        }
      }
    }
    return null;
  };

  const findComponentsByType = (type) => {
    const collectionType = collections.find((item) => item.type === type)
      ? collections.find((item) => item.type === type)
      : collections[0];
    const collection = collectionType.nfts.map((item) => (
      <Link
        href={{ pathname: "/nft", query: { type: type, id: item.props.id } }}
      >
        <div className={styles.nft_collection_container} key={item.props.id}>
          {item}
          <div className={styles.nft_info_title_container}>
            <p className={workSans.className}>{item.props.name}</p>
          </div>
          <div className={styles.nft_info_author_continer}>
            {collectionType.authorIcon}
            <p className={workSans.className}>{collectionType.authorName}</p>
          </div>
        </div>
      </Link>
    ));
    return collection;
  };

  const component = id ? findComponentById(id) : findComponentsByType(type);

  return <>{component}</>;
};

export default Nft;
