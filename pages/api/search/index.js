import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { cors, runMiddleware } from "components/middleware";

const replaceMangaPage = "https://komiku.id/manga/";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const genre = "comedy";
  const statusS = "Ongoing";
  const typeS = "manga";
  const orderBy = "popular";
  const { data } = await axios.get(
    `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
  );
  const $ = cheerio.load(data);
  const element = $(".list-update");
  let komik_list = [];

  // console.log(element);
  let title, type, rating, endpoint, thumb, chapter;

  element
    .find(".list-update_items-wrapper > .list-update_item")
    .each((i, el) => {
      title = $(el).find("a > .list-update_item-info").find("h3").text().trim();
      type = $(el).find("a > .list-update_item-image").find(".type").text();
      thumb = $(el).find("a > .list-update_item-image").find("img").attr("src");
      // thumb = $(el).find()
      chapter = $(el)
        .find("a > .list-update_item-info")
        .find(".other")
        .find(".chapter")
        .text()
        .trim();
      endpoint = $(el)
        .find("a > .list-update_item-info")
        .find(".other")
        .find(".chapter")
        .attr("href");
      rating = $(el)
        .find("a > .list-update_item-info")
        .find(".other > .rate > .rating")
        .find(".numscore")
        .text();
      // .trim();
      komik_list.push({ title, type, thumb, chapter, endpoint, rating });
    });

  return res.status(200).json({
    status: true,
    message: "success",
    komik_list,
  });
}
