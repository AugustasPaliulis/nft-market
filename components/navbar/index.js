import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { useState } from "react";

import Styles from "./Navbar.module.css";
import Storefront from "../../styles/icons/Storefront.svg";
import Hamburger from "../../styles/icons/Hamburger.svg";
import Close from "../../styles/icons/x-solid.svg";
import User from "../../styles/icons/User.svg";
import { useAuth } from "../../context/AuthUserContext";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const { authUser, signOut } = useAuth();

  return (
    <header className={Styles.navbar}>
      <div className={Styles.navbar_logo_container}>
        <Link href="/">
          <Storefront fill="#A259FF" />
          <h4>NFT Marketplace</h4>
        </Link>
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
            <Link onClick={() => closeMenu()} href="#trending">
              Trending
            </Link>
          </li>

          {authUser ? null : (
            <li>
              <Link onClick={() => closeMenu()} href="/auth/sign_in">
                Sign In
              </Link>
            </li>
          )}
          <li className={` ${Styles.email_list} ${Styles.desktop_hidden}`}>
            {authUser ? (
              <div
                className={` ${Styles.email_container} ${
                  Styles.desktop_hidden
                } ${Styles.signup} ${navbarOpen ? Styles.show : null}`}
              >
                <div className={Styles.email}>
                  <User className="mg-r-10" />
                  {authUser.email}
                </div>
                <div className={Styles.dropdown_container}>
                  <Button
                    onClick={authUser ? signOut : null}
                    buttonStyle="outline"
                    buttonSize="extra_small"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <Link
                onClick={() => closeMenu()}
                className={`${Styles.desktop_hidden} ${Styles.signup} ${
                  navbarOpen ? Styles.show : null
                }`}
                href="/auth/sign_up"
              >
                <Button buttonSize="small">
                  <User className="mg-r-10" />
                  Sign Up
                </Button>
              </Link>
            )}
          </li>
        </ul>
        {authUser ? (
          <div className={` ${Styles.email_container} ${Styles.signup}`}>
            <div className={Styles.email}>
              <User className="mg-r-10" />
              {authUser.email}
            </div>
            <div className={Styles.dropdown_container}>
              <Button
                onClick={authUser ? signOut : null}
                buttonStyle="outline"
                buttonSize="extra_small"
              >
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          <Link className={Styles.signup} href="/auth/sign_up">
            <Button onClick={authUser ? signOut : null} buttonSize="small">
              <User className="mg-r-10" />
              {authUser ? "Sign Out" : "Sign Up"}
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
