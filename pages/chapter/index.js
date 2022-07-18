import axios from "axios";
import { Content } from "components/content/content";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
axios;
export default function Chapter({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Home</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_RAPIDAPI_KEY}</h1> */}
      {/* <h1>{process.env.NEXT_PUBLIC_HOST}</h1> */}
      {/* <Content /> */}
      <div className="img flex flex-col max-w-lg items-center relative">
        {/* {chapter_image.map((data, i) => (
          <Image
            key={i}
            src={data.chapter_image_link}
            layout="fill"
            objectFit="contain"
            alt={title}
          />
        ))} */}
        <h1>Chapter</h1>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     "http://localhost:3000/api/chapter/chikashitsu-dungeon-binbou-kyoudai-wa-goraku-o-motomete-saikyou-e-chapter-29-bahasa-indonesia"
//   );
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }
