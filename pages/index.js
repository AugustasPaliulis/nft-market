import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Hero from "../components/page_parts/hero";
import Trending from "../components/page_parts/trending";
import firebase from "../firebase/config";
import { useAuth } from "../context/AuthUserContext";
export default function Home() {
  // const { authUser } = useAuth();
  // console.log("state tatus:");
  // console.log(authUser);
  // console.log("firebase status:");
  // console.log(firebase.auth().currentUser);

  return (
    <div>
      <Hero />
      <Trending />
    </div>
  );
}
