import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

const replaceMangaPage = "https://komiku.id/manga/";

export default async function handler(req, res) {
  const { data } = await axios.get("https://komikcast.me/daftar-komik/");
  const $ = cheerio.load(data);
  const element = $(".list-update");
  let komik_list = [];

  console.log(element);
  let title, type, updated_on, endpoint, thumb, chapter;

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
      komik_list.push({ title, type, thumb, chapter, endpoint });
    });

  // element.find(".daftar > .bge").each((idx, el) => {
  //   title = $(el).find(".kan > a").find("h3").text().trim();
  //   endpoint = $(el).find("a").attr("href").replace(replaceMangaPage, "");
  //   type = $(el).find(".bgei > a").find(".tpe1_inf > b").text();
  //   updated_on = $(el).find(".kan > span").text().split("• ")[1].trim();
  //   thumb = $(el).find(".bgei > a").find("img").attr("data-src");
  //   chapter = $(el)
  //     .find("div.kan > div:nth-child(5) > a > span:nth-child(2)")
  //     .text();
  //   komik_list.push({
  //     title,
  //     thumb,
  //     type,
  //     updated_on,
  //     endpoint,
  //     chapter,
  //   });
  // });
  return res.status(200).json({
    status: true,
    message: "success",
    komik_list,
  });
}
