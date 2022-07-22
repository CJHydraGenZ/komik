import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { fetcherAPI } from "components/function/fetch";
import { HandleKomikList } from "components/function/scraping";
import { HandleListPage } from "components/function/scraping_komikid";
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

  // const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;
  // // // console.log("inii pst", req.body);
  // // `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
  // const url =
  //   req.method === "POST"


  //     ? `https://api.scrapfly.io/scrape?key=29f02355ef574070a9a180c6bb2aa420&url=https%3A%2F%2Fkomikcast.me%2Fdaftar-komik%2F%3Fgenre%5B%5D%3D${genre}%26status%3D${statusS}%26type%3D${typeS}%26orderby%3D${orderBy}&country=au`

  //     : `https://api.scrapfly.io/scrape?key=29f02355ef574070a9a180c6bb2aa420&url=https%3A%2F%2Fkomikcast.me%2Fkomik%2F&country=au`;

  res.status(200).json(await HandleListPage('1'))
  // switch (req.method) {
  //   case "GET":
  //     // console.log(element);
  //     // return res.status(200).json(await HandleKomikList(url));
  //     return res.status(200).json(await HandleListPage(1))

  //   case "POST":
  //     return res.status(200).json(await HandleKomikList(url));

  //   default:
  //     return res.status(200).json({
  //       status: true,
  //       message: "success",
  //       komik_list,
  //     });
  // }
}
