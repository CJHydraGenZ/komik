import React, { useEffect, useState } from "react";
// import { Card, Rating } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
// import { ch } from "components/function/ch";
import { ImageCard } from "./Image";
export const CardRecommend = ({
  endpoint,
  thumb,
  title,
  chapter,
  rating,
  last_upload_endpoint,
}) => {
  let rate = Math.round((rating * 10) / 2 / 10);
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-full my-2">
      <Link href={`/komik/${endpoint}`}>
        {/* <a className="group"> */}
        {/* <Card imgAlt={title} imgSrc={thumb}> */}
        {/* <div className="block"> */}
        <div className="flex">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
            <ImageCard variant="recommend" title={title} thumb={thumb} />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {title}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">{chapter}</p>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="relative w-full h-full">
              <Image
                src={thumb}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
          <div className="info">
            <h2 className="font-normal truncate overflow-hidden text-gray-700 dark:text-gray-400">
              {title}
            </h2>
            <h3 className="font-normal text-gray-700 dark:text-gray-400">
              {chapter}
            </h3>
            <div>
              <Rating>
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {Math.round((rating * 10) / 2 / 10)} out of 5
                </p>
              </Rating>
              <Rating.Advanced percentFilled={Number(rating * 10)}>
                {rate} star
              </Rating.Advanced>
              <h2 className="font-normal text-gray-700 dark:text-gray-400">
                {rating}
              </h2>
            </div> */}
        </div>

        {/* </Card> */}
        {/* </a> */}
      </Link>
    </div>
  );
};
