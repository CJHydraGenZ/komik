import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ch } from "components/function/ch";
import Limage from "public/loading.webp";
export const ImageCard = ({ variant, thumb, title }) => {
  const [loading, setLoading] = useState(true);
  // const [src, setSrc] = useState(Limage);
  // useEffect(() => {
  //   if (thumb) {
  //     setSrc(thumb);
  //   }
  // }, [thumb]);
  const variants = {
    recommend: "aspect-w-16 aspect-h-8",
    daftar: "aspect-w-6 aspect-h-7",
    komik: "aspect-h-4",
    chapter: "aspect-w-14",
  };
  const pickVarian = variants[variant];
  return (
    <div
      className={`image-container w-full bg-gray-200 overflow-hidden ${pickVarian} `}
    >
      {/* <img className="flex aspect-w-10" src={src} alt={title} /> */}
      <Image
        src={thumb}
        alt={title}


        className={ch(
          "image group-hover:opacity-75 duration-700 ease-in-out",
          loading
            ? "image grayscale blur-2xl scale-110"
            : "image grayscale-0 blur-0 scale-100"
        )}
        fill
        //   onLoadingComplete={() => setLoading(false)}
        onLoadingComplete={(result) => {
          setLoading(false)
          if (result.naturalWidth === 0) {
            // Broken image
            setSrc(thumb);
          }
        }}
        priority
      />
    </div>
  );
};
