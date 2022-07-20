import { CardKomik } from "@/content/card/card";
import { KomikList } from "@/content/komik/komikList";
import axios from "axios";
import { Content } from "components/content/content";
import { AxiosAPP } from "components/function/axios";
import { fetcher } from "components/function/fetch";
// import { AxiosAPP } from "components/function/axios";
import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";

export default function Komik({ fallback }) {
  const [data, setData] = useState([]);
  // console.log("inidata", data);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/komik`);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
        <h1>Komik</h1>
        {/* <div className="filter bg-slate-300 h-60 w-full">filter</div> */}

        <div className="list-komik  h-auto w-full px-4 py-2">
          <div className="flex items-center justify-between">
            <h1>Daftar komik</h1>
            <h1>Daftar komik</h1>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {loading
              ? "Loading..."
              : data?.komik_list?.map((d, i) => (
                  <CardKomik
                    key={i}
                    thumb={d.thumb}
                    title={d.title}
                    rating={d.rating}
                    endpoint={d.endpoint}
                    chapter={d.chapter}
                    last_upload_endpoint={d.last_upload_endpoint}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
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
