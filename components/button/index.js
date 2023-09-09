import styles from "./Button.module.css";

const SIZE = ["big", "medium", "small"];

const Button = ({ className, children, buttonSize, disabled }) => {
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  const disabledButton = disabled ? "disabled" : "";

  return (
    <>
      <button
        className={`${styles.button} ${styles[checkSize]} ${className} ${styles[disabledButton]}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
