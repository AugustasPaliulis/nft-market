import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import { useAuth } from "../../context/AuthUserContext";
import SignUpForm from "../../components/page_parts/forms/signUp";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { authUser } = useAuth();
  const router = useRouter();
  const [showAlertState, setShowAlertState] = useState(false);
  useEffect(() => {
    if (authUser) {
      router.push("/");
    }
  });
  useEffect(() => {
    const showAlert = router.query.showAlert === "true";

    if (showAlert && !showAlertState) {
      // Show an alert using react-toastify
      toast.warn(" Sign Up please", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
      });
      setShowAlertState(true);
    }
  }, [router.query.showAlert]);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <SignUpForm />
      <ToastContainer />
    </>
  );
};

export default SignUp;
