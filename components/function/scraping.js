import axios from "axios";
// import got from "got";

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
  // const options = {
  //   headers: {
  //     Referer: "https://komikcast.me/",
  //   },
  // };
  // const response = await AxiosService(`manga/${endpoint}/`);
  const data = await fetcherAPI(`${link_endpoint}/${endpoint}`);

  // const res = await got(`${link_endpoint}/${endpoint}`, options);
  // const data = res.body;
  // console.log("ini data", res.body);
  const $ = cheerio.load(data);
  // const element = $(".content");
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

    const { data } = await axios.get("https://komikcast.me", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
        Referer: "https://google.com",
        DNT: "1",
        Cahya: "sahhda",
      },
    });

    // const req = await response.json();
    // const data = await req.body;

    // console.log(data);
    // const { data } = await client.get("https://komikcast.me");
    // console.log(response.status === 200);
    // console.log("ini log", data);
    // if (response.status === 200) {
    const $ = cheerio.load(data);
    const element = $(".listupd");

    // console.log(element);
    const komik_list = [];
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
    // }
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
    // console.log(element.html());

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

export const HandleKomikChapterId = async (cid) => {
  const link_endpoint = "https://komikcast.me/komik/";
  const chapter_link = "https://komikcast.me/chapter/";
  const chaptera_link =
    "https://komikcast.me/chapter/chikashitsu-dungeon-binbou-kyoudai-wa-goraku-o-motomete-saikyou-e-chapter-29-bahasa-indonesia/";

  // const { cid } = req.query;
  try {
    // const response = await AxiosService(`${chapter_link}/${cid}/`);
    // const response = await axios.get(`https://komikcast.id/${cid}`)
    const data = await fetcherAPI(`${chapter_link}/${cid}/`);
    console.log("data chpater", data);
    const $ = cheerio.load(data);
    const content = $("#content");
    let chapter_image = [];
    const obj = {};
    obj.chapter_endpoint = cid + "/";
    obj.chapter_name = cid.split("-").join(" ").trim();

    obj.title = $(".chapter_headpost > h1").text().trim();

    const getTitlePages = content.find(".dsk2");
    getTitlePages.filter(() => {
      obj.title = $(getTitlePages).find("h1").text().replace("Komik ", "");
    });

    const getPages = $(".main-reading-area > img");

    // const getPages = $('#chimg > img')
    obj.chapter_pages = getPages.length;
    getPages.each((i, el) => {
      chapter_image.push({
        chapter_image_link: $(el).attr("src"),
        image_number: i + 1,
      });
    });
    obj.chapter_image = chapter_image;
    return obj;
  } catch (error) {
    return {
      status: false,
      message: error,
      chapter_image: [],
    };
  }
};
