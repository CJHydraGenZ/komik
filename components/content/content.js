import React from "react";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
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
      <div className="flex">
        <div className="flex">KomikList</div>
        <div className="flex">Genre List</div>
      </div>
    </>
  );
};
