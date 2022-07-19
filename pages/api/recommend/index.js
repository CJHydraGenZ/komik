// import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { AxiosAPP, AxiosService, client } from "components/function/axios";
import { fetcher, fetcherAPI } from "components/function/fetch";
import { HandleRecommend } from "components/function/scraping";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });

  res.status(200).json(await HandleRecommend());
}
