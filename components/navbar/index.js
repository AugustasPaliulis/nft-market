import Image from "next/image";
import Link from "next/link";
import Button from "../button";

import Styles from "./Navbar.module.css";
import Storefront from "../../styles/icons/Storefront.svg";

const NavBar = () => {
  return (
    <header className={Styles.navbar}>
      <div className={Styles.navbar_logo_container}>
        <Storefront fill="#A259FF" />
        <h4>NFT Marketplace</h4>
      </div>
      <nav className={Styles.navbar_links}>
        <ul>
          <li>
            <Link href="/">Marketplace</Link>
          </li>
          <li>
            <Link href="/">Rankings</Link>
          </li>
          <li>
            <Link href="/">Connect a wallet</Link>
          </li>
        </ul>

        <Link href="/">
          <Button />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
