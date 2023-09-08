import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import MrFox from "../styles/avatars/MrFox.svg";
import Bear from "../styles/images/animals_collection/bear.svg";
import Cat from "../styles/images/animals_collection/cat.svg";
import Dog from "../styles/images/animals_collection/dog.svg";
import Nft from "../components/nft";



const NftPage = () => {
  const router = useRouter();
  const [type, setType] = useState();
  const [nftId, setId] = useState();

  useEffect(() => {
    if (router.query.type && router.query.id) {
      setType(router.query.type);
      setId(router.query.id);
    } else {
      router.push("/");
    }
  });


  if (!router.query.type && !router.query.id) {
    return (
      <>
        <br />
        <br /> 
        <br />
        <div>What u doing??</div>
      </>
    );
  }

  return <div><Nft id={nftId}/></div>;
};

export default NftPage;
