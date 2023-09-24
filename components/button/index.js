import styles from "./Button.module.css";

const SIZE = ["big", "medium", "small", "extra_small"];

const STYLE = ["button", "outline"];

const Button = ({
  className,
  children,
  buttonSize,
  disabled,
  buttonStyle,
  type,
  onClick,
}) => {
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  const checkStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const disabledButton = disabled ? "disabled" : "";

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${styles[checkStyle]} ${styles[checkSize]} ${className} ${styles[disabledButton]}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
