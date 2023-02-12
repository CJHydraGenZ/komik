import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { HandleKomikList } from "components/scaping/komikcash/scraping";
// import { HandleListPage } from "components/function/scraping_komikid";
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

  const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;

  const url =
    req.method === "POST"
      ? `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
      : `https://api.scrapfly.io/scrape?key=29f02355ef574070a9a180c6bb2aa420&url=https%3A%2F%2Fkomikcast.me%2Fdaftar-komik%2F&tags=player%2Cproject%3Adefault&proxy_pool=public_residential_pool`;

  const data = await HandleKomikList(url);
  switch (req.method) {
    case "GET":
      return res.status(200).json(data);
    case "POST":
      return res.status(200).json(data);

    default:
      return res.status(200).json({
        status: true,
        message: "success",
        // komik_list,
        // eror: "ini error",
      });
  }
}
