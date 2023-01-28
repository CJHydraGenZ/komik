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

export default function Komik({ fallback }) {

  const { data, error } = useSWR(`/api/komik`, fetcher);

  if (!data) return "Loading...";
  console.log('sas', data);

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
            {
              data?.komik_list?.map((d, i) => (
                // <CardKomik
                //   key={i}
                //   thumb={d.thumb}
                //   title={d.title}
                //   rating={d.rating}
                //   endpoint={d.endpoint}
                //   chapter={d.chapter}
                //   last_upload_endpoint={d.last_upload_endpoint}
                // />
                <div key={i} className="h-auto rounded-sm bg-base-100 shadow-xl overflow-hidden">
                  <Link className="flex gap-2" href={`/komik/${d.endpoint}`}>
                    <figure className="w-full" ><Image className="image" fill src={d.thumb} alt={d.title} /></figure>
                    <div className="w-5/6">
                      <h2 className="">{d.title}</h2>
                      {/* <h2 >{d.chapter}</h2> */}
                      <Link href={`/chapter/${d.last_upload_endpoint}`}>{d.chapter}</Link>
                      <p>{d.rating}</p>
                      {/* <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div> */}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div >
    // </SWRConfig>
  );
}

// export async function getServerSideProps(context) {
//   // const res = await fetch(`${server}/api/komik/`, {
//   //   method: "GET", // *GET, POST, PUT, DELETE, etc.
//   //   // mode: 'cors', // no-cors, *cors, same-origin
//   //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   //   // credentials: 'same-origin', // include, *same-origin, omit
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "Access-Control-Allow-Origin": "*",
//   //     // 'Content-Type': 'application/x-www-form-urlencoded',
//   //   },
//   //   // redirect: "follow", // manual, *follow, error
//   //   // referrerPolicy: "no-referrer",
//   // });

//   // const data = await res.json();
//   const API = `${server}/api/komik/`;
//   const data = await fetcher(API);
//   return {
//     props: {
//       fallback: {
//         [API]: data,
//       },
//     }, // will be passed to the page component as props
//   };
// }
