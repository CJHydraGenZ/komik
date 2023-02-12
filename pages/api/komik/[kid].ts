import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

import { HandlerKomikId } from "components/scaping/komikcash/scraping";
// import { HandleDetailId } from "components/function/scraping_komikid";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { kid } = req.query;

  const data = await HandlerKomikId(kid);
  res.status(200).json(data);
}
