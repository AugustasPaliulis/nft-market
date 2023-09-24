import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import NftInfoBlock from "../components/page_parts/nft_info_page";
import { useAuth } from "../context/AuthUserContext";

const NftPage = () => {
  const { authUser, loading } = useAuth();

  const router = useRouter();
  const [type, setType] = useState();
  const [nftId, setId] = useState();

  useEffect(() => {
    if (!loading && !authUser) {
      console.log("Log in please");
      router.push({ pathname: "/auth/sign_up", query: { showAlert: "true" } });
    }
  }, [authUser, loading]);

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
