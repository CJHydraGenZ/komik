
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
      <div className="alert alert-warning shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>For now only for mobile view!</span>
        </div>
      </div>
      <Content />
      {/* </div> */}
    </div>
  );
}

