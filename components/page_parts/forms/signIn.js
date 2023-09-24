import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../../context/AuthUserContext";
import Input from "../../form_input";
import Button from "../../button";
import styles from "./SignIn.module.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);
  const { signInWithEmailAndPassword } = useAuth();
  const onSubmit = (event) => {
    setEmailError(null);
    setPasswordError(null);
    setError(null);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else if (!password) {
      setPasswordError("Please provide password");
    } else {
      signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log("Success.");
          router.push("/");
        })
        .catch((error) => {
          setError(error.code);
        });
    }
    event.preventDefault();
  };
  return (
    <>
      <h2 className={styles.form_title}>Sign In</h2>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type="text"
            value={email}
            erroMessage={emailError}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError(null);
            }}
            placeholder="johndoe@example.com"
            label="Email"
          />
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Password"
            label="Your password"
            erroMessage={passwordError}
          />
          <div className={styles.error_container}>
            {error === "auth/user-not-found" || error === "auth/wrong-password"
              ? "Incorrect sign in data"
              : ""}
          </div>
          <Button buttonSize="small" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
