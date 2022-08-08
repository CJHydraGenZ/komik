import React from "react";
import KomikCard from "@/content/komik/komikCard";
import { CardRecommend } from "../card/cardRecommed";
const contentList = ({ data, loading }) => {
  return (
    <div className="flex flex-col lg:w-3/4">
      <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>

      {loading
        ? "Loading..."
        : data?.komik_list?.map((d, i) => (
          <CardRecommend
            key={i}
            thumb={d.thumb}
            title={d.title}
            chapter={d.chapter}
            rating={d.rating}
            endpoint={d.endpoint}
            last_upload_endpoint={d.last_upload_endpoint}
          />
        ))}
    </div>
  );
};

export default contentList;
