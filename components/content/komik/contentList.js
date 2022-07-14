import React from "react";
import KomikCard from "@/content/komik/komikCard";
const contentList = () => {
  const data = [
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
    {
      thumb:
        "https://i3.wp.com/batchmanga.com/wp-content/uploads/2022/06/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-v10.jpg?resize=141,200",
      score: 4.56,
      judul: "Classroom of the elite",
      status: "Ongoing",
      genre: "comedy",
    },
  ];
  return (
    <div className="flex flex-col w-3/4 ">
      <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>
      {data.map((d, i) => (
        <KomikCard
          key={i}
          thumb={d.thumb}
          score={d.score}
          status={d.status}
          judul={d.judul}
          genre={d.genre}
        />
      ))}
    </div>
  );
};

export default contentList;
