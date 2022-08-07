import { ImageCard } from "@/content/card/Image";
import axios from "axios";
import { Content } from "components/content/content";
import { fetcher } from "components/function/fetch";
import { server } from "config";
// import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

// import styles from "../styles/Home.module.css";
export default function Chapter() {
  const router = useRouter();
  const { id } = router.query;
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { chapter_endpoint, chapter_image, chapter_name, chapter_page, title } =
  //   data;
  const { data, error } = useSWR(`/api/chapter/${id}`, fetcher);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    if (!router.isReady) return;
    // if (error) return "An error has occurred.";
    // if (!data) return "Loading...";
    // getData();
  }, [router.isReady]);

  return (
    <div>
      <Head>
        <title>Chapter</title>
        <meta name="chapter" content={data?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Home</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_RAPIDAPI_KEY}</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_HOST}</h1> */}
      {/* <Content /> */}
      <div className="container lg:px-24">
        <div className="flex flex-col space-y-4">
          <h1>{data?.title}</h1>
          <div className="flex flex-col space-y-6">
            <h1>{data?.chapter_name}</h1>
            <div className="img">
              <div className="relative w-full h-full">
                {data?.chapter_image?.map((d, i) => (
                  <ImageCard
                    key={i}
                    variant="chapter"
                    thumb={d.chapter_image_link}
                    title={data?.chapter_name}
                  // layout="fill"
                  // objectFit="cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button>Kembali</button>
              {/* <button>Kembali</button> */}
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button>Lanjut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // Call an external API endpoint to get posts
//   const { id } = context.query;
//   const res = await fetch(`${server}/api/chapter/${id}`);
//   const data = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// }
