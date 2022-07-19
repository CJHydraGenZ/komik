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
  // console.log("inidata", data);
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(`/api/komik`);
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

  return (
    <SWRConfig value={{ fallback }}>
      <KomikList />
    </SWRConfig>
  );
}

export async function getServerSideProps(context) {
  // const res = await fetch(`${server}/api/komik/`, {
  //   method: "GET", // *GET, POST, PUT, DELETE, etc.
  //   // mode: 'cors', // no-cors, *cors, same-origin
  //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   // credentials: 'same-origin', // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   // redirect: "follow", // manual, *follow, error
  //   // referrerPolicy: "no-referrer",
  // });

  // const data = await res.json();
  const API = `${server}/api/komik/`;
  const data = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: data,
      },
    }, // will be passed to the page component as props
  };
}
