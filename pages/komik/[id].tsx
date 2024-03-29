import { ImageCard } from "@/content/card/Image";
import axios from "axios";
import Content from "components/content/content";
import { fetcher } from "components/function/fetch";
import LoadingChapter from "components/loading/loadingChapter";
import { HandlerKomikId } from "components/scaping/komikcash/scraping";
// import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
// import { AmpAutoAds } from "react-amphtml";

// import styles from "../styles/Home.module.css";
export default function KomikID() {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);
  // console.log("ini", data);
  const { data, error }: any = useSWR(`/api/komik/${id}`, fetcher);

  if (!data) return <LoadingChapter />;

  return (
    <div>
      <Head>
        <title>KomikIDC</title>
        <meta
          name="google-site-verification"
          content="aX_-Lu_g7LPtYAvpUMQBSTeRhszIhVwmIojpAxsnhsI"
        />
        <meta name="komik" content={data?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col space-y-4 w-full">
        <div className="flex flex-col">
          <ImageCard
            variant="komik"
            thumb={data?.thumb}
            title={data?.title}
          />

          {
            /* {loading ? (
              "Loading..."
            ) : (
            )} */
          }
          {
            /* <amp-auto-ads type="adsense" data-ad-client="ca-pub-5156335750859862">
          </amp-auto-ads> */
          }
          <div className="info flex flex-wrap gap-2">
            {/* <ul className="list-disc"> */}
            {data?.genre_list?.map((g: any, i: any) => (
              <Link key={i} href={`/genre/${g}`}>
                {g}
              </Link>
            ))}
            {
              /* <li>asas</li>
              <li>asas</li>
              <li>asas</li> */
            }
            {/* </ul> */}
          </div>
        </div>
        <div className="synopsis bg-slate-600 p-2 text-white rounded-sm">
          {data?.synopsis}
        </div>
      </div>
      <div className="komik-chapter">
        <h1>{data?.released}</h1>
        <ul>
          {
            /* {loading
            ? "Loading..."
            : chapter?.map((d, i) => (
                <li key={i}>
                  <Link href={`/chapter/${d.chapter_endpoint}`}>
                    <a className="flex justify-between">
                      <h2>{d.chapter_title}</h2>
                      <h2>{d.chapter_time}</h2>
                    </a>
                  </Link>
                </li>
              ))} */
          }
          {data?.chapter?.map((d: any, i: any) => (
            <li key={i}>
              <Link
                className="flex justify-between"
                href={`/chapter/${d.chapter_endpoint}`}
              >
                {/* <a > */}
                <h2>{d.chapter_title}</h2>
                <h2>{d.chapter_time}</h2>
                {/* </a> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // const router = useRouter();
//   // console.log("ini endpoint", endpoint);
//   const { id } = context.query;
//   // const res = await fetch(`${server}/api/komik/${id}`);
//   // const data = await res.json();
//   const data = await HandlerKomikId(id);
//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//   };
// }
