import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
import { CardRecommend } from "./card/cardRecommed";
import { CardPopular } from "./card/cardPopular";
import { server } from "config";
import { AxiosAPP } from "components/function/axios";
// import { get } from "cheerio/lib/api/traversing";
// import axios from "axios";
export const Content = () => {
  // console.log("dsad", posts);
  const [komik, setkomik] = useState([]);
  const [komikList, setKomikList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecommend = async () => {
    try {
      setLoading(true);
      const { data } = await AxiosAPP(`/api/recommend`);

      // console.log(res);
      setkomik(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getKomikList = async () => {
    try {
      setLoading(true);
      const { data } = await AxiosAPP(`/api/komik`);

      // console.log(res);
      setKomikList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecommend();
    getKomikList();
  }, []);

  return (
    <>
      <div className=" bg-green-200">
        {/* {komik?.komik_list?.map((d, i) => (
          <CardRecommend
            key={i}
            thumb={d.thumb}
            title={d.title}
            rating={d.rating}
            endpoint={d.endpoint}
            chapter={d.chapter}
            last_upload_endpoint={d.last_upload_endpoint}
          />
        ))} */}

        <CardPopular />
      </div>

      <div className="flex w-full gap-2">
        <ContentList data={komikList} loading={loading} />

        <SeriesList />
      </div>
    </>
  );
};
