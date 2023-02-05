
import { Content } from "@/content/content";
import { Recommend } from "@/content/recommend/recommend";
import { convertDate, getFormattedDate } from "components/function/date";
import { fetcher, multiFetcher } from "components/function/fetch";
import { Loading } from "components/loading/loading";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import styles from "../styles/Home.module.css";

export default function Home() {
  // const { data, error } = useSWR(`/api/github`, fetcher);
  const { data: git, error } = useSWR(`/api/github`, fetcher);
  const { data } = useSWR(['/api/recommend', '/api/release'], multiFetcher);
  if (!data) return <Loading />;
  const [recommend, release] = data
  // console.log(data[0]);
  // console.log(data[1]);

  return (
    <div className={styles.container}>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik_idc" content="KomikIDC mengediakan API manga, manhua, manhwa " />
        <meta name="komik_idc" content="KomikIndo merupakan tempat baca komik online bahasa Indonesia. Kamu bisa membaca komik Webtoon (Manhua China dan Manhwa korea) secara gratis di KomikIndo!" />
        <link rel="canonical" href="https://komikidc.site/" /><meta property="og:locale" content="id_ID" /><meta property="og:type" content="website" /><meta property="og:title" content="KomikIDC | Baca Komik Bahasa Indonesia" /><meta property="og:description" content="KomikIndo merupakan tempat baca komik online bahasa Indonesia. Kamu bisa membaca komik Webtoon (Manhua China dan Manhwa korea) secara gratis tampa iklan" /><meta property="og:url" content="https://komikidc.site/" /><meta property="og:site_name" content="KomikIDC" /><meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="container"> */}
      <div className="alert alert-success shadow-lg">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span className="text-white text-sm">Update</span>
          <span className="text-white text-sm">{git?.author.name}</span>
          <span className="text-white text-sm">{convertDate(git?.committer.date)}</span>
          <span className="text-white text-sm">{git?.message}</span>
        </div>
      </div>
      <Recommend data={recommend} />

      <Content release={release} />

    </div>
  );
}

