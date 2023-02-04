// import { KomikList } from "@/content/komik/komikList";
import axios from "axios";
// import { Content } from "components/content/content";
import { fetcher } from "components/function/fetch";
// import { server } from "config";
import { CardKomik } from "@/content/card/card";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import useSWR, { SWRConfig } from "swr";
import { useState } from "react";
import loading from "components/loading/loading";
import LoadingListKomik from "components/loading/loadingListKomik";
export default function Komik({ fallback }) {
  const [cnt, setCnt] = useState(1)

  function Page({ index }) {
    const { data } = useSWR(`/api/komik/page/${index}`, fetcher);
    if (!data) return <LoadingListKomik />;
    // ... handle loading and error states
    return data?.komik_list?.map((d, i) => (

      <div key={i} className="h-auto rounded-sm bg-base-100 shadow-xl overflow-hidden">
        <Link className="flex gap-2" href={`/komik/${d.endpoint}`}>
          <figure className="w-full" ><Image className="image" fill src={d.thumb} alt={d.title} /></figure>
          <div className="w-5/6">
            <h2 className="">{d.title}</h2>
            {/* <h2 >{d.chapter}</h2> */}
            <Link href={`/chapter/${d.last_upload_endpoint}`}>{d.chapter}</Link>
            <p>{d.rating}</p>

          </div>
        </Link>
      </div>
    ))
  }

  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<Page index={i} key={i} />)
  }
  return (
    // <SWRConfig value={{ fallback }}>
    // <KomikList />
    <div>
      <Head>
        <title>Daftar komik</title>
        <meta name="daftar komik" content="Daftar komik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-full">
        <h1 className="mx-auto">Daftar Komik</h1>
        {/* <div className="filter bg-slate-300 h-60 w-full">filter</div> */}

        <div className="list-komik  h-auto w-full px-4 py-2">


          <div className="grid grid-cols-1 gap-y-2 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4 ">
            {pages}
          </div>
          <button className="btn mt-2" onClick={() => setCnt(cnt + 1)}>Load More</button>
        </div>
      </div>
    </div >
    // </SWRConfig>
  );
}
