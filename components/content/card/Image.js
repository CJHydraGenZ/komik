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
    recommend: "xl:aspect-w-16 xl:aspect-h-8",
    daftar: "xl:aspect-w-6 xl:aspect-h-7",
    komik: "xl:aspect-w-6 xl:aspect-h-4",
  };
  const pickVarian = variants[variant];
  return (
    <div
      className={`w-full aspect-w-8 aspect-h-6 bg-gray-200 overflow-hidden ${pickVarian}`}
    >
      <Image
        src={thumb}
        alt={title}
        layout="fill"
        // objectFit="cover"
        className={ch(
          "group-hover:opacity-75 duration-700 ease-in-out",
          loading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
