import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
import { CardRecommend } from "./card/cardRecommed";
import { CardPopular } from "./card/cardPopular";
import { server } from "config";
import { fetcher, fetcherAPI } from "components/function/fetch";
// import { get } from "cheerio/lib/api/traversing";
// import axios from "axios";
export const Content = () => {
  // console.log("dsad", posts);
  const [komik, setkomik] = useState([]);
  const [komikList, setKomikList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      await axios
        .all([
          axios.get(`${server}/api/recommend`),
          axios.get(`${server}/api/komik/`),
          // axios.get('https://api.github.com/users/iliakan'),
          // axios.get('https://api.github.com/users/taylorotwell')
        ])
        .then(
          axios.spread((obj1, obj2) => {
            setkomik(obj1.data);
            setKomikList(obj2.data);
          })
        );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // getRecommend();
    // getKomikList();
  }, []);

  // console.log(komik);
  // console.log(komikList);

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

        {/* <CardPopular /> */}
      </div>

      <div className="lg:flex w-full gap-2">
        <ContentList data={komikList} loading={loading} />

        <SeriesList />
      </div>
    </>
  );
};
