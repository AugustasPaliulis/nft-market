import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Hero from "../components/page_parts/hero";
import Trending from "../components/page_parts/trending";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trending />
    </div>
  );
}
