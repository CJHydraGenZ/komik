import { fetcher } from "components/function/fetch";

import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import useSWR, { Fetcher, SWRConfig } from "swr";
import { useMemo, useState } from "react";
import { CldImage } from "next-cloudinary";
import LoadingListKomik from "components/loading/loadingListKomik";

import { KomikData } from "components/type/DataType";
export default function Komik() {
  const [cnt, setCnt] = useState(1);

  function Page({ index }: { index: number }) {
    const { data }: any = useSWR(
      `/api/komik/page/${index}`,
      fetcher,
    );
    if (!data) return <LoadingListKomik />;

    // const { komik_list }: KomikData[] = data || [];
    // ... handle loading and error states
    return data?.komik_list?.map((d: KomikData, i: any) => (
      <div
        key={i}
        className="h-auto rounded-sm bg-base-100 shadow-xl overflow-hidden"
      >
        <Link className="flex gap-2" href={`/komik/${d.endpoint}`}>
          <figure className="w-full h-[200px]  relative">
            <Image
              className="image"
              fill
              quality={1}
              src={d.thumb}
              alt={d.title}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
            />
          </figure>
          <div className="w-5/6">
            <h2 className="">{d.title}</h2>
            {/* <h2 >{d.chapter}</h2> */}
            <Link href={`/chapter/${d.last_upload_endpoint}`}>
              {d.chapter}
            </Link>
            <p>{d.rating}</p>
          </div>
        </Link>
      </div>
    ));
  }

  const PageMemory = useMemo(() => {
    const pages = [];
    for (let i = 0; i < cnt; i++) {
      pages.push(<Page index={i} key={i} />);
    }
    return pages;
  }, [cnt]);
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
            {PageMemory}
          </div>

          <button className="btn mt-2" onClick={() => setCnt(cnt + 1)}>
            Load More
          </button>
        </div>
      </div>
    </div>
    // </SWRConfig>
  );
}
