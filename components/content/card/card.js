import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { ImageCard } from "./Image";
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
        {/* <a> */}
        {/* <Card imgAlt={title} imgSrc={thumb}> */}
        <div className="flex">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <ImageCard variant="daftar" title={title} thumb={thumb} />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {title}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                {/* the bulk of the card's content. */}
              </p>
              <ul className="flex justify-center">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="img">
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
            </div>
          </div> */}

        {/* </Card> */}
        {/* </a> */}
      </Link>
    </div>
  );
};
