
import { Content } from "@/content/content";
import { convertDate, getFormattedDate } from "components/function/date";
import { fetcher } from "components/function/fetch";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, error } = useSWR(`/api/github`, fetcher);

  if (!data) return "Loading...";
  console.log('sas', data);
  return (
    <div className={styles.container}>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik_idc" content="KomikIDC recomendasi listkomik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="container"> */}
      <div className="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span className="text-white">Update</span>
          <span className="text-white">{data?.author.name}</span>
          <span className="text-white">{convertDate(data?.committer.date)}</span>
          <span className="text-white">{data?.message}</span>
          {/* <Link href={data?.html_url}>commit cek</Link> */}
        </div>
      </div>
      <Content />
      {/* </div> */}
    </div>
  );
}

