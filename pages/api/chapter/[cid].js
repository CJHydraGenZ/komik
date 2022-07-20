import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { HandleKomikChapterId } from "components/function/scraping";
import NextCors from "nextjs-cors";

// import Cors from "cors";

// const cors = Cors({
//   methods: ["GET", "HEAD"],
// });

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }

export default async function handler(req, res) {
  // await runMiddleware(req, res, cors);
  const { cid } = req.query;
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  res.status(200).json(await HandleKomikChapterId(cid));
}
