import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import NftInfoBlock from "../components/page_parts/nft_info_page";

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
  }, [router]);

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

  return (
    <div>
      <NftInfoBlock type={type} id={nftId} />
    </div>
  );
};

export default NftPage;
