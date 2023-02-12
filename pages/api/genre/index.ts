import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import * as cheerio from "cheerio";
import { getGenre } from "components/scaping/komikcash/genre";

import NextCors from "nextjs-cors";
import { TypeGenre } from "components/type/genreType";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { cid } = req.query;
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = await getGenre();

  res.status(200).json(data);
}
