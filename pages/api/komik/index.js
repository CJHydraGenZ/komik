import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { fetcherAPI } from "components/function/fetch";
import { HandleKomikList } from "components/function/scraping";
import NextCors from "nextjs-cors";

// import { cors, runMiddleware } from "components/middleware";

// import Cors from "cors";

// // Initializing the cors middleware
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

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  // const link_endpoint = "https://komikcast.me/komik/";

  const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;
  // // console.log("inii pst", req.body);
  const url =
    req.method === "POST"
      ? `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
      : `https://komikcast.me/daftar-komik/`;

  switch (req.method) {
    case "GET":
      // console.log(element);
      return res.status(200).json(await HandleKomikList(url));

    case "POST":
      return res.status(200).json(await HandleKomikList(url));

    default:
      return res.status(200).json({
        status: true,
        message: "success",
        komik_list,
      });
  }
}
