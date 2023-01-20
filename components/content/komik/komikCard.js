import React from "react";
// import { Footer } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
const komikCard = ({
  thumb,
  title,
  chapter,
  rating,
  endpoint,
  last_upload_endpoint,
}) => {
  return (
    <>
      <Link href={endpoint}>
        {/* <a> */}
        <div className="flex w-full  gap-2">
          <div className="img relative bg-yellow-200">
            {/* <img src={thumb} alt="addadjfjka" /> */}
            <Image
              src={thumb}
              layout="fill"
              objectFit="cover"
              alt={title}
              className="relative max-w-full h-auto rounded-md"
            // width={200}
            // height={200}
            />
          </div>
          <div className="flex flex-col flex-initial">
            <h1 className="text-lg font-semibold">{title}</h1>
            <h3 className="text-sm font-medium">{chapter}</h3>

            {/* <h3 className="text-sm font-medium">Genre : {genre}</h3> */}
          </div>
          <div className="flex flex-1 justify-end items-center p-4">
            <div className="score  bg-blue-400 rounded-md  text-white py-4 px-3 w-14">
              {rating}
            </div>
          </div>
        </div>
        {/* </a> */}
      </Link>
      <Link href={last_upload_endpoint}>
        {/* <a> */}
        {chapter}
        {/* </a> */}
      </Link>
      {/* <Footer.Divider /> */}
    </>
  );
};

export default komikCard;
