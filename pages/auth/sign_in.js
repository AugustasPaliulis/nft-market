import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthUserContext";
import Input from "../../components/form_input";
import Button from "../../components/button";
import SignInForm from "../../components/page_parts/forms/signIn";

const SignIn = () => {
  const { authUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (authUser) {
      router.push("/");
    }
  });
  return (
    <>
      <br />
      <br />
      <SignInForm />
    </>
  );
};

export default SignIn;
