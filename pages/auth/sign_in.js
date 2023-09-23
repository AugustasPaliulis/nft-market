import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthUserContext";
import Input from "../../components/form_input";
import Button from "../../components/button";
import SignInForm from "../../components/page_parts/forms/signIn";

const SignIn = () => {
  return (
    <>
      <br />
      <br />
      <SignInForm />
    </>
  );
};

export default SignIn;
