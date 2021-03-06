import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { fetcherAPI } from "components/function/fetch";
import { HandleKomikList } from "components/function/scraping";
import { HandleListPage } from "components/function/scraping_komikid";
import NextCors from "nextjs-cors";



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
  const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;
  // // console.log("inii pst", req.body);
  const url =
    req.method === "POST"
      ? `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
      : `https://komikcast.me/daftar-komik/`;



  // res.status(200).json(await HandleKomikList())
  switch (req.method) {
    case "GET":
      // console.log(element);
      return res.status(200).json(await HandleKomikList(url));
    // return res.status(200).json(await HandleListPage(1))

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
