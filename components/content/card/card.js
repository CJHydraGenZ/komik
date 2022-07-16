import React, { useEffect, useState } from "react";
import { Card, Rating } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
export const CardKomik = ({
  endpoint,
  thumb,
  title,
  chapter,
  rating,
  last_upload_endpoint,
}) => {
  let rate = Math.round((rating * 10) / 2 / 10);

  return (
    <div className="w-full h-full ">
      <Link href={`/komik/${endpoint}`}>
        <a>
          {/* <Card imgAlt={title} imgSrc={thumb}> */}
          <div className="img">
            <div className="relative w-full h-full">
              <Image
                src={thumb}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
          <div className="info text-ellipsis overflow-hidden">
            <h2 className="font-normal text-gray-700 dark:text-gray-400">
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
            </div>
          </div>

          {/* </Card> */}
        </a>
      </Link>
    </div>
  );
};
