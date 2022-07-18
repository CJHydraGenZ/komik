import axios from "axios";
import * as cheerio from "cheerio";
export const HandlerKomikId = async (kid) => {
  const link_endpoint = "https://komikcast.me/komik";
  const chapter_link = "https://komikcast.me/chapter/";
  let endpoint;
  if (kid === "tokyo%e5%8d%8drevengers") {
    endpoint = "tokyo卍revengers/";
  } else {
    endpoint = kid;
  }

  // const response = await AxiosService(`manga/${endpoint}/`);
  const { data } = await axios.get(`${link_endpoint}/${endpoint}`);

  const $ = cheerio.load(data);
  const element = $(".content");
  // console.log(element);
  let genre_list = [];
  let chapter = [];
  const obj = {};
  let info_list = [];
  /* Get Title, Type, Author, Status */
  // const getMeta = element.find(".inftable > tbody").first();
  obj.komik_endpoint = kid;
  obj.title = $(".komik_info-content-body > h1").text().trim();
  obj.description = $(".komik_info-content-body > .komik_info-content-native")
    .text()
    .trim();

  obj.type = $(".komik_info-content-body > .komik_info-content-meta")
    .find(".komik_info-content-info-type")
    .text()
    .split(":")
    .splice(1)
    .join()
    .trim();
  obj.author = $(".komik_info-content-body > .komik_info-content-meta")
    .find("span:nth-child(2)")
    .text()
    .split(":")
    .splice(1)
    .join()
    .trim();
  obj.status = $(".komik_info-content-body > .komik_info-content-meta")
    .find("span:nth-child(3)")
    .text()
    .split(":")
    .splice(1)
    .join()
    .trim();
  obj.released = $(".komik_info-content-body > .komik_info-content-meta")
    .find("span:nth-child(1)")
    .text()
    .split(":")
    .splice(1)
    .join()
    .trim();
  obj.total_chapter = $(".komik_info-content-body > .komik_info-content-meta")
    .find("span:nth-child(5)")
    .text()
    .split(":")
    .splice(1)
    .join()
    .trim();
  obj.update_on = $(".komik_info-content-body > .komik_info-content-meta")
    .find("span > time")
    .text()
    .trim();
  obj.thumb = $(".komik_info-content > .komik_info-content-thumbnail")
    .find("img")
    .attr("src");

  $(".komik_info-content-body > .komik_info-content-genre").each((idx, el) => {
    let genre_name = $(el)
      .find("a")
      .text()
      .split(/(?=[A-Z])/g);

    genre_list.push({
      genre_name,
    });
  });
  obj.synopsis = $(".komik_info-description > .komik_info-description-sinopsis")
    .find("p")
    .text()
    .trim();

  obj.genre_list = genre_list || [];

  $(".komik_info-chapters > ul")
    .find("li")
    .each((index, el) => {
      let chapter_title = $(el).find("a").text().trim();
      let chapter_endpoint = $(el).find("a").attr("href");
      let chapter_time = $(el).find(".chapter-link-time").text().trim();
      if (chapter_endpoint !== undefined) {
        const rep = chapter_endpoint.replace(chapter_link, "");
        chapter.push({
          chapter_title,
          chapter_endpoint: rep,
          chapter_time,
        });
      }
      obj.chapter = chapter;
    });

  return obj;
};
