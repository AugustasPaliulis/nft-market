import User from "../../styles/icons/User.svg";
import Styles from "./Button.module.css";

const Button = ({ className }) => {
  return (
    <>
      <button className={`${Styles.button} ${className}`}>
        <User />
        Sign Up
      </button>
    </>
  );
};

export default Button;
