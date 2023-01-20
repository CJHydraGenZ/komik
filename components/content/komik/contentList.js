import React from "react";
import KomikCard from "@/content/komik/komikCard";
import { CardRecommend } from "../card/cardRecommed";
import Image from "next/image";
import Link from "next/link";
const contentList = ({ data, loading }) => {
  return (
    <div className="w-auto">
      <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>

      {loading
        ? "Loading..."
        : data?.komik_list?.map((d, i) => (
          // <CardRecommend
          //   key={i}
          //   thumb={d.thumb}
          //   title={d.title}
          //   chapter={d.chapter}
          //   rating={d.rating}
          //   endpoint={d.endpoint}
          //   last_upload_endpoint={d.last_upload_endpoint}
          // />
          <div key={i} className="flex lg:flex-row bg-base-100 shadow-xl mt-1 ">
            <Link href={`/komik/${d.endpoint}`}>
              <figure className="image-container w-1/6">
                <Image className="image " fill src={d.thumb} alt={d.title} priority />
              </figure>
              <div className="card-body w-5/6">
                <h2 className="card-title">{d.title}!</h2>
                <p>{d.chapter}.</p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div> */}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default contentList;
