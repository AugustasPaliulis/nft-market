import Nft from "../../nft";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import styles from "./Collection.module.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const CollectionBlock = () => {
  const router = useRouter();
  const [type, setType] = useState();
  useEffect(() => {
    if (router.query.type) {
      setType(router.query.type);
    } else {
      router.push("/");
    }
  });

  useState;
  return (
    <>
      <div
        className={`${styles.collection_title_container} ${roboto.className}`}
      >
        {type}
      </div>
      <div className={styles.collection_container}>
        <Nft type={type} />
        <Nft type={type} />
        <Nft type={type} />
        <Nft type={type} />
      </div>
    </>
  );
};

export default CollectionBlock;
