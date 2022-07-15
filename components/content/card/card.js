import React, { useEffect, useState } from "react";
import { Card, Rating } from "flowbite-react";
import Link from "next/link";
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
    <div className="max-w-sm">
      <Link href={endpoint}>
        <a>
          <Card imgAlt={title} imgSrc={thumb}>
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
          </Card>
        </a>
      </Link>
    </div>
  );
};
