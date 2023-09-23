import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../../context/AuthUserContext";
import Input from "../../form_input";
import Button from "../../button";
import styles from "./SignIn.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState(null);
  const [passwordErrorOne, setPasswordErrorOne] = useState(null);
  const [passwordErrorTwo, setPasswordErrorTwo] = useState(null);
  const [error, setError] = useState(null);
  const { createUserWithEmailAndPassword } = useAuth();
  const onSubmit = (event) => {
    setEmailError(null);
    setPasswordErrorOne(null);
    setPasswordErrorTwo(null);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Define avlidation rules
    const passwordRules = [
      {
        regex: /[A-Z]/,
        message: "Password must contain at least one uppercase letter",
      },
      {
        regex: /[a-z]/,
        message: "Password must contain at least one lowercase letter",
      },
      { regex: /\d/, message: "Password must contain at least one digit" },
      {
        regex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        message: "Password must contain at least one special character",
      },
    ];

    // Define minimum length
    const minLength = 8;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    }
    if (!passwordOne) {
      setPasswordErrorOne("Please provide password");
    } else if (passwordOne.length < minLength) {
      setPasswordErrorOne(
        "Password must be at least " + minLength + " characters long"
      );
    } else {
      for (const rule of passwordRules) {
        if (!rule.regex.test(passwordOne)) {
          setPasswordErrorOne(rule.message);
        }
      }
    }
    if (!passwordErrorOne && !passwordTwo) {
      setPasswordErrorTwo("Please repeat your password");
    } else if (!passwordErrorOne && passwordOne !== passwordTwo) {
      setPasswordErrorTwo("Passwords do not match");
    } else if (!emailError && !passwordErrorOne && !passwordErrorTwo) {
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase.");
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
      <h2 className={styles.form_title}>Sign Up</h2>
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
            onChange={(event) => {
              setPasswordOne(event.target.value);
              setPasswordErrorOne(null);
            }}
            value={passwordOne}
            placeholder="Password"
            label="Your password"
            erroMessage={passwordErrorOne}
          />
          <Input
            type="password"
            onChange={(event) => {
              setPasswordTwo(event.target.value);
              setPasswordErrorTwo(null);
            }}
            value={passwordTwo}
            placeholder="Password"
            label="Repeat password"
            erroMessage={passwordErrorTwo}
          />
          <Button buttonSize="small" type="submit">
            Sign up
          </Button>
        </form>
        {error === "auth/user-not-found" || error === "auth/wrong-password"
          ? "Incorrect sign in data"
          : ""}
      </div>
    </>
  );
};

export default SignUpForm;
