import User from "../../styles/icons/User.svg";
import Styles from "./Button.module.css";

const Button = () => {
  return (
    <>
      <button className={Styles.button}>
        <User />
        Sign Up
      </button>
    </>
  );
};

export default Button;
