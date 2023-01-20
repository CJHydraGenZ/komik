import { server } from "config";
import Head from "next/head";
import React from "react";
import useSWR, { SWRConfig } from "swr";
import { CardKomik } from "../card/card";

export const KomikList = () => {
  const API = `${server}/api/komik/`;
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  // console.log("Is data ready?", !!data);
  // console.log(data);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
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
            {!data
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
  );
};
