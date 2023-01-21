
import { Content } from "@/content/content";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik_idc" content="KomikIDC recomendasi listkomik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="container"> */}
      <Content />
      {/* </div> */}
    </div>
  );
}

