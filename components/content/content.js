import React from "react";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
export const Content = () => {
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

  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {data.map((d, i) => (
          <CardKomik key={i} img={d.img} title={d.title} />
        ))}
      </div>
      <div className="flex w-full gap-2">
        <ContentList />

        <SeriesList />
      </div>
    </>
  );
};
