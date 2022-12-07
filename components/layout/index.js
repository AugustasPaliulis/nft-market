import NavBar from "../navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.layout}>{children}</div>
    </>
  );
};

export default Layout;
