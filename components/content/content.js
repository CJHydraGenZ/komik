import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
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
      const { data } = await axios.get("http://localhost:3000/api/recommend");

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
      const { data } = await axios.get("http://localhost:3000/api/komik");

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
      {loading ? (
        "Loading....."
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {komik?.komik_list?.map((d, i) => (
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
      )}

      <div className="flex w-full gap-2">
        <ContentList data={komikList} loading={loading} />

        <SeriesList />
      </div>
    </>
  );
};
