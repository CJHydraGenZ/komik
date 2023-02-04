import React, { useEffect, useState } from "react";
import axios from "axios";

import useSWR from "swr";
import { fetcher } from "components/function/fetch";
import RecommendList from "./recommendList";
// import { RecommendList } from './recommendList'
export const Recommend = ({ data }) => {


  // const { data, isLoading } = useSWR(`/api/data`, fetcher);

  // if (!data) return 'loading...'

  return (
    <>
      <div className='w-full bg-base-100 shadow-xl'>
        <h1 className="text-lg font-bold my-2">Recommend</h1>

        <RecommendList data={data} loading={data} />

      </div>

    </>
  );
};
