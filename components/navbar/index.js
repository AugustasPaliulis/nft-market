import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { useState } from "react";

import Styles from "./Navbar.module.css";
import Storefront from "../../styles/icons/Storefront.svg";
import Hamburger from "../../styles/icons/Hamburger.svg";
import Close from "../../styles/icons/x-solid.svg";
import User from "../../styles/icons/User.svg";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className={Styles.navbar}>
      <div className={Styles.navbar_logo_container}>
        <Storefront fill="#A259FF" />
        <h4>NFT Marketplace</h4>
      </div>
      <nav className={Styles.navbar_links}>
        <button
          className={`${Styles.desktop_hidden} ${Styles.navbar_hamburger}`}
          onClick={handleToggle}
        >
          {!navbarOpen ? <Hamburger /> : <Close fill="white" />}
        </button>
        <ul
          className={`${Styles.navbar_menu} ${navbarOpen ? Styles.show : null}`}
        >
          <li>
            <Link onClick={() => closeMenu()} href="/">
              Marketplace
            </Link>
          </li>
          <li>
            <Link onClick={() => closeMenu()} href="/">
              Rankings
            </Link>
          </li>
          <li>
            <Link onClick={() => closeMenu()} href="/">
              Connect a wallet
            </Link>
          </li>
          <li>
            <Link
              onClick={() => closeMenu()}
              className={`${Styles.desktop_hidden} ${Styles.signup} ${
                navbarOpen ? Styles.show : null
              }`}
              href="/"
            >
              <Button buttonSize="small">
                <User className="mg-r-10" />
                Sign Up
              </Button>
            </Link>
          </li>
        </ul>

        <Link className={Styles.signup} href="/">
          <Button buttonSize="small">
            <User className="mg-r-10" />
            Sign Up
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
