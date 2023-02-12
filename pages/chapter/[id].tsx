import { ImageCard } from "@/content/card/Image";
import axios from "axios";
import Content from "components/content/content";
import { fetcher } from "components/function/fetch";
import LoadingChapter from "components/loading/loadingChapter";
import LoadingChapterId from "components/loading/loadingChapterId";
import { TypeChapterImage, TypeKomikChapter } from "components/type/komikType";
import { server } from "config";
// import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

// import styles from "../styles/Home.module.css";
export default function Chapter() {
  const router = useRouter();
  const { id } = router.query;

  const [page, setPage] = useState(0);

  const { data: chapter }: any = useSWR(`/api/chapter/${id}`, fetcher);
  const { data: komik }: any = useSWR(
    `/api/komik/${chapter?.komik_endpoint}`,
    fetcher,
  );

  if (!chapter) return <LoadingChapterId />;
  if (!komik) return <LoadingChapterId />;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/chapter/${e.target.value}`);
    setPage(+e.target.value);
  };

  const handleNext = () => {
    router.push(
      `/chapter/${
        chapter.chapter_endpoint.replace(
          /\d+/gm,
          (chapter?.chapter_page + 1).toString().padStart(2, "0"),
        )
      }`,
    );
  };
  const handlePrevious = () => {
    router.push(
      `/chapter/${
        chapter.chapter_endpoint.replace(
          /\d+/gm,
          (chapter?.chapter_page - 1).toString().padStart(2, "0"),
        )
      }`,
    );
  };

  return (
    <div>
      <Head>
        <title>Chapter</title>
        <meta name="chapter" content={chapter?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container lg:px-24">
        <div className="flex flex-col space-y-4">
          <h1>{chapter?.title}</h1>
          <div className="flex flex-col space-y-6">
            <h1>{chapter?.chapter_name}</h1>
            {/* <div className="img"> */}
            <div className="w-full h-full">
              {chapter?.chapter_image?.map((d: TypeChapterImage, i: any) => (
                <ImageCard
                  key={i}
                  variant="chapter"
                  thumb={d.chapter_image_link}
                  title={chapter?.chapter_name}
                  // layout="fill"
                  // objectFit="cover"
                />
              ))}
              {/* </div> */}
            </div>
            <div className="flex justify-between">
              <button onClick={handlePrevious}>Kembali</button>
              <select onChange={(e) => handleChange(e)} value={page}>
                {komik?.chapter?.map((d: TypeKomikChapter, i: number) => (
                  <option key={i} value={d.chapter_endpoint}>
                    {d.chapter_endpoint.split(/\D+/gm).join(" ")}
                  </option>
                ))}
              </select>
              <button onClick={handleNext}>Lanjut</button>
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
//   const chapter = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       chapter,
//     },
//   };
// }
