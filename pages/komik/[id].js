import { ImageCard } from "@/content/card/Image";
import axios from "axios";
import { Content } from "components/content/content";
import { AxiosAPP } from "components/function/axios";
import { fetcher } from "components/function/fetch";
import { HandlerKomikId } from "components/function/scraping";
import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

// import styles from "../styles/Home.module.css";
export default function KomikID() {
  const router = useRouter();
  const { id } = router.query;
  // console.log("ini endpoint", id);
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("ini", data);
  const { data, error } = useSWR(`${server}/api/komik/${id}`, fetcher);

  // const getData = async () => {
  //   try {
  //     setLoading(true);

  //     // const { data } = await axios.get(`${server}/api/komik/${id}`);

  //     // const data = await HandlerKomikId(id);

  //     // console.log("data", data);
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // console.log("ini thumb", thumb);
  useEffect(() => {
    if (!router.isReady) return;
    // if (error) return "An error has occurred.";
    // if (!data) return "Loading...";
    // getData();
  }, [router.isReady]);

  // const {
  //   komik_endpoint,
  //   title,
  //   description,
  //   type,
  //   author,
  //   status,
  //   released,
  //   total_chapter,
  //   update_on,
  //   thumb,
  //   synopsis,
  //   genre_list,
  //   chapter,
  // } = data;
  // console.log(chapter);
  return (
    <div>
      <Head>
        <title>KomikIDC</title>

        <meta name="komik" content={data?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col space-y-4 w-full">
        <div className="flex">
          <div className="img relative w-full h-full">
            <ImageCard
              variant="komik"
              thumb={data?.thumb}
              title={data?.title}
            />

            {/* {loading ? (
              "Loading..."
            ) : (
            )} */}
          </div>
          <div className="info flex">
            <ul className="list-disc">
              <li>asas</li>
              <li>asas</li>
              <li>asas</li>
            </ul>
            <ul className="list-disc">
              <li>asas</li>
              <li>asas</li>
              <li>asas</li>
            </ul>
          </div>
        </div>
        <div className="synopsis">{data?.synopsis}</div>
      </div>
      <div className="komik-chapter">
        <h1>{released}</h1>
        <ul>
          {/* {loading
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
              ))} */}
          {data?.chapter?.map((d, i) => (
            <li key={i}>
              <Link href={`/chapter/${d.chapter_endpoint}`}>
                <a className="flex justify-between">
                  <h2>{d.chapter_title}</h2>
                  <h2>{d.chapter_time}</h2>
                </a>
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
