import axios from "axios";
// import * as cheerio from "cheerio";
// import axios from 'axios';
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

// await client.get("https://example.com");

// const cheerio = require("cheerio");
import * as cheerio from "cheerio";
import { fetcherAPI } from "./fetch";
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

export const HandleRecommend = async () => {
  try {
    const link_endpoint = "https://komikcast.me/komik/";

    const { data } = await axios.get("https://komikcast.me");
    // const { data } = await client.get("https://komikcast.me");
    // console.log(data);

    const $ = cheerio.load(data);
    const element = $("#content");
    let komik_list = [];

    console.log(element.html());
    let title, type, endpoint, last_upload_endpoint, thumb, chapter, rating;

    element.find(".swiper-wrapper > .swiper-slide").each((i, el) => {
      title = $(el)
        .find("a > .splide__slide-info")
        .find(".title")
        .text()
        .trim();
      type = $(el).find("a > .splide__slide-image").find(".type").text().trim();
      thumb = $(el).find("a > .splide__slide-image").find("img").attr("src");
      // thumb = $(el).find()
      endpoint = $(el).find("a").attr("href").replace(link_endpoint, "");
      chapter = $(el)
        .find("a > .splide__slide-info")
        .find(".other")
        .find(".chapter")
        .text()
        .trim();
      last_upload_endpoint = $(el)
        .find("a > .splide__slide-info")
        .find(".other")
        .find(".chapter")
        .attr("href");

      rating = $(el)
        .find("a > .splide__slide-info")
        .find(".other > .rate > .rating")
        .find(".numscore")
        .text();

      komik_list.push({
        endpoint,
        title,
        type,
        thumb,
        chapter,
        last_upload_endpoint,
        rating,
      });
    });
    // res.statusCode = 200;
    return {
      status: true,
      message: "success",
      komik_list,
    };
  } catch (error) {
    return {
      status: false,
      message: "error",
      komik_list,
    };
  }
};

export const HandleKomikList = async (url) => {
  try {
    const link_endpoint = "https://komikcast.me/komik/";

    const data = await fetcherAPI(url);
    // const { data } = await client.get(url);

    const $ = cheerio.load(data);
    const element = $(".list-update");
    console.log(element.html());

    let komik_list = [];
    let title, type, endpoint, thumb, chapter, rating, last_upload_endpoint;

    element
      .find(".list-update_items-wrapper > .list-update_item")
      .each((i, el) => {
        title = $(el)
          .find("a > .list-update_item-info")
          .find("h3")
          .text()
          .trim();
        type = $(el).find("a > .list-update_item-image").find(".type").text();
        thumb = $(el)
          .find("a > .list-update_item-image")
          .find("img")
          .attr("src");
        // thumb = $(el).find()
        chapter = $(el)
          .find("a > .list-update_item-info")
          .find(".other")
          .find(".chapter")
          .text()
          .trim();
        last_upload_endpoint = $(el)
          .find("a > .list-update_item-info")
          .find(".other")
          .find(".chapter")
          .attr("href");

        endpoint = $(el).find("a").attr("href").replace(link_endpoint, "");

        komik_list.push({
          title,
          type,
          thumb,
          chapter,
          endpoint,
          last_upload_endpoint,
        });
      });
    return {
      status: true,
      message: "success",
      komik_list,
    };
  } catch (error) {
    return {
      status: false,
      message: "error",
      komik_list,
    };
  }
};
