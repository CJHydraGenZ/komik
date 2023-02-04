import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "flowbite-react";
import { CardKomik } from "./card/card";
import ContentList from "@/content/komik/contentList";
import SeriesList from "@/content/komik/seriesList";
import { CardRecommend } from "./card/cardRecommed";
import { CardPopular } from "./card/cardPopular";
import { server } from "config";
import Listkomik from "./list_komik/komik";
import useSWR from "swr";
import { fetcher } from "components/function/fetch";
export const Content = ({ release }) => {


  // const { data, isLoading } = useSWR(`/api/release`, fetcher);
  // if (!release) return 'loading...'


  return (
    <>


      <div className="lg:flex w-full gap-2 ">
        <ContentList data={release} loading={release} />
        {/* <Listkomik data={komikList} loading={loading} /> */}
        <SeriesList />
      </div>
    </>
  );
};
