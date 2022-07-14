import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
// import { get } from "cheerio/lib/api/traversing";
// import axios from "axios";
export const Content = ({ data1 }) => {
  console.log(data1, "data 1");
  const data = [
    {
      img: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "solo leveling",
    },
    {
      img: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "solo leveling",
    },
    {
      img: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "solo leveling",
    },
    {
      img: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "solo leveling",
    },
    {
      img: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "solo leveling",
    },
  ];
  const [komik, setkomik] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/api/recommend");
      console.log(data);
      setkomik(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
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
            />
          ))}
        </div>
      )}

      <div className="flex w-full gap-2">
        <ContentList />

        <SeriesList />
      </div>
    </>
  );
};
