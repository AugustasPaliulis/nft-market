import styles from "./Button.module.css";

const SIZE = ["big", "medium", "small"];

const Button = ({ className, children, buttonSize }) => {
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <>
      <button className={`${styles.button} ${styles[checkSize]} ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
