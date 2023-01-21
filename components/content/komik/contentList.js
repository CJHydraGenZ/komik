import React from "react";
import KomikCard from "@/content/komik/komikCard";
import { CardRecommend } from "../card/cardRecommed";
import Image from "next/image";
import Link from "next/link";
const contentList = ({ data, loading }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>

      {loading
        ? "Loading..."
        : data?.komik_list?.map((d, i) => (

          <div key={i} className=" w-full bg-base-100 shadow-xl mt-1 ">
            <Link className="flex flex-row gap-2" href={`/komik/${d.endpoint}`}>
              <figure className="w-1/6">
                <Image className="image" fill src={d.thumb} alt={d.title} priority />
              </figure>
              <div className="w-5/6">
                <h2 className="">{d.title}!</h2>
                {/* <p>{d.chapter}.</p> */}
                <Link href={`/chapter/${d.last_upload_endpoint}`}>{d.chapter}</Link>

              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default contentList;
