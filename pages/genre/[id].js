import React from 'react'
import { useRouter } from 'next/router'
import { fetcher } from 'components/function/fetch';
import useSWR from 'swr';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const { data: genre, } = useSWR(`/api/genre/${id}`, fetcher);
  if (!genre) return 'loading...'
  // console.log(genre);
  return (
    <div>
      <h1>ini {id}</h1>
      {
        genre?.genre_list.map((d, i) => <ul key={i}>
          <li>{d.thumb}</li>
          <li>{d.title}</li>
          <li>{d.endpoint}</li>
          <li>{d.chapter}</li>
          <li>{d.score}</li>
        </ul>
        )
      }
    </div>
  )
}
