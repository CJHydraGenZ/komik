import axios from "axios";
import { Content } from "components/content/content";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  // const options = {
  //   method: "GET",
  //   url: "https://webtoon.p.rapidapi.com/canvas/home",
  //   params: { language: "en" },
  //   headers: {
  //     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  //     "X-RapidAPI-Host": "webtoon.p.rapidapi.com",
  //   },
  // };

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.request(options);
  //     setData(await response.data);
  //     // console.log(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log("INI DATA", data?.message?.result);
  // // console.log(process.env.NEXT_PUBLIC_HOST);

  return (
    <div className={styles.container}>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik_idc" content="KomikIDC recomendasi listkomik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Home</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_RAPIDAPI_KEY}</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_HOST}</h1> */}
      <Content />
    </div>
  );
}

// "dependencies": {
//   "next": "latest",
//   "react": "^18",
//   "react-dom": "^18",
//   "react-is": "^17.0.2"
// },
// "devDependencies": {
//   "@types/react": "^18",
//   "bun-framework-next": "^12",
//   "typescript": "latest",
//   "react-refresh": "latest"
// }
