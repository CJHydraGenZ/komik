import axios from "axios";
import * as cheerio from "cheerio";
// import type { NextApiRequest, NextApiResponse } from "next";

import { HandlerKomikId } from "components/scaping/komikcash/scraping";
// import { HandleDetailId } from "components/function/scraping_komikid";
import NextCors from "nextjs-cors";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  // const { searchParams } = new URL(req.url)
  const kid = searchParams.get("kid");
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  // const { kid } = req.query;

  const data = await HandlerKomikId(kid);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
