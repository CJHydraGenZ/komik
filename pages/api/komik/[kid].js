import axios from "axios";
import * as cheerio from "cheerio";
import { HandlerKomikId } from "components/function/scraping";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const { kid } = req.query;
  // await runMiddleware(req, res, cors);

  console.log("ini", kid);

  return res.status(200).json(await HandlerKomikId(kid));
}
