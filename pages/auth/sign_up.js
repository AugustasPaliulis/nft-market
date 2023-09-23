import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthUserContext";
import SignUpForm from "../../components/page_parts/forms/signUp";

const SignUp = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <SignUpForm />
    </>
  );
};

export default SignUp;
