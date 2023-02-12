// import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { getLastRelease } from "components/scaping/komikcash/release";
import type { NextApiRequest, NextApiResponse } from "next";

// import { HandleRecommend } from "components/scaping/komikcash/scraping";
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
  const data = await getLastRelease();
  res.status(200).json(data);
}
