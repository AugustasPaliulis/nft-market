import styles from "./Input.module.css";

const Input = ({ placeholder, value, type, erroMessage, onChange, label }) => {
  const checkType = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.input_container}>
      <div className={styles.label}>{label}</div>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onSubmit={(event) => {
          checkType(event.target.value);
        }}
        onChange={onChange}
        className={`${styles.input} ${erroMessage ? styles.alert : ""}`}
      ></input>
      <div className={styles.error_message_container}>{erroMessage}</div>
    </div>
  );
};

export default Input;
