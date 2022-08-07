import axios from "axios";
import { Content } from "components/content/content";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik_idc" content="KomikIDC recomendasi listkomik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  );
}

