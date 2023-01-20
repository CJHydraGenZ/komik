import axios from "axios";

import * as cheerio from "cheerio";
import { getGenreList } from "components/scaping/komikcash/genre";

import NextCors from "nextjs-cors";



export default async function handler(req, res) {
  // await runMiddleware(req, res, cors);
  const { gid } = req.query;
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  res.status(200).json(await getGenreList(gid));
}
