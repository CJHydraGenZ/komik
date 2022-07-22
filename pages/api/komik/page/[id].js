import axios from "axios";
import * as cheerio from "cheerio";
import { HandlerKomikId } from "components/function/scraping";
import { HandleDetailId, HandleListPage } from "components/function/scraping_komikid";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { id } = req.query;
  // await runMiddleware(req, res, cors);

  // console.log("ini", id);

  res.status(200).json(await HandleListPage(id));
}
