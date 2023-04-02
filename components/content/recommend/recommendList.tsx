import React from "react";
import KomikCard from "@/content/komik/komikCard";
import { CardRecommend } from "../card/cardRecommed";
import Image from "next/image";
import Link from "next/link";
import { TypeRecommend } from "components/type/recommendType";
const RecommendList = ({ data }: any) => {
  return (
    <div className="flex flex-row gap-1 overflow-x-scroll">
      {data?.recommend_list?.map((d: TypeRecommend, i: number) => (
        <div key={i} className="w-40 bg-base-100 shadow-xl mt-1 ">
          <Link
            className="flex flex-col  gap-2 "
            href={`/komik/${d.endpoint}`}
          >
            <figure className="w-40 relative">
              <Image
                className="image"
                fill
                quality={80}
                src={d.thumb}
                alt={d.title}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority
              />
            </figure>
            <div className="w-5/6 ">
              <h2 className="truncate ">{d.title}!</h2>
              <p className="">{d.type}</p>

              <Link href={`/chapter/${d.last_upload_endpoint}`}>
                {d.chapter}
              </Link>
              <p className="">{d.rating}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendList;
