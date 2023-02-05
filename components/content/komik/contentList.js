import React from "react";
import KomikCard from "@/content/komik/komikCard";
import { CardRecommend } from "../card/cardRecommed";
import Image from "next/image";
import Link from "next/link";
const contentList = ({ data, loading }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>
      <div className="grid lg:grid-cols-2 lg:gap-2">
        {data?.release_list?.map((d, i) => (

          <div key={i} className=" w-full bg-base-100 shadow-xl mt-1 ">
            <Link className="flex flex-row gap-2" href={`/komik/${d.endpoint}`}>
              <figure className="w-20 h-28  relative">
                <Image className="object-fill" fill src={d.thumb} alt={d.title} priority />
              </figure>
              <div className="lg:w-5/6">
                <h2 className="overflow-hidden truncate w-32">{d.title}!</h2>

                {
                  d.chapter_list.map((link, i) => <div className="flex justify-between  gap-1" key={i}>
                    <Link className="text-sm" href={`/chapter/${link.chapter_endpoint}`}>Chapter.{link.chapter}</Link>
                    <p className="text-sm">{link.release}</p>
                  </div>)
                }


              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default contentList;
