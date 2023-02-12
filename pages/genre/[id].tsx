import React from "react";
import { useRouter } from "next/router";
import { fetcher } from "components/function/fetch";
import useSWR from "swr";
import { GenreList } from "components/type/genreType";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const { data: genre }: any = useSWR(`/api/genre/${id}`, fetcher);
  if (!genre) return "loading...";
  // console.log(genre);
  return (
    <div>
      <h1>ini {id}</h1>
      {genre?.genre_list.map((d: GenreList, i: any) => (
        <ul key={i}>
          <li>{d.thumb}</li>
          <li>{d.title}</li>
          <li>{d.endpoint}</li>
          <li>{d.chapter}</li>
          <li>{d.score}</li>
        </ul>
      ))}
    </div>
  );
}
