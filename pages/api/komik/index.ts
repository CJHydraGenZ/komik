// import type { NextApiRequest, NextApiResponse } from "next";
import { HandleKomikList } from "components/scaping/komikcash/scraping";
import type { NextRequest, NextResponse } from "next/server";

import NextCors from "nextjs-cors";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest, res: NextResponse) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });

  // const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;

  // const url =
  //   req.method === "POST"
  //     ? `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
  //     : `https://api.scrapfly.io/scrape?key=29f02355ef574070a9a180c6bb2aa420&url=https%3A%2F%2Fkomikcast.me%2Fdaftar-komik%2F&tags=player%2Cproject%3Adefault&proxy_pool=public_residential_pool`;

  const data = await HandleKomikList();
  switch (req.method) {
    case "GET":
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    case "POST":
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });

    default:
      return new Response(
        JSON.stringify({
          status: true,
          message: "success",
        })
      );
  }
}
