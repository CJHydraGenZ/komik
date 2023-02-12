import { type } from "os";
import axios from "axios";
// import got from "got";

import * as cheerio from "cheerio";
import {
  TypeChapter,
  TypeChapterImage,
  TypeGenreKomik,
  TypeKomikChapter,
  TypeKomikID,
  TypeKomikList,
} from "components/type/komikType";
import { TypeRecommend } from "components/type/recommendType";
// import { TypeGenre } from "components/type/genreType";

const dev = process.env.NODE_ENV !== "production";

export const HandlerKomikId = async (kid: any) => {
  const link_endpoint = "https://komikcast.me/komik";
  const link_endpoin =
    "https://komikcast.site/komik/?3a24865d44=34bc35bc9a&9d047e76e1=5a0ad9215b&6baa5a75ed=4893b65c36&dd91d164d6=daad574380&7328157bb0=277750332e&fbclid=IwAR1BfHI7WDlJA_KQopLNRwuCKMU26DmvlmZJFU1-zkZr3yNNOKPmR9SVJA8";
  const chapter_link = "https://komikcast.site/chapter/";
  let endpoint = kid;

  const data = await fetch(
    `https://komikcast.site/komik/${endpoint}?3a24865d44=34bc35bc9a&9d047e76e1=5a0ad9215b&6baa5a75ed=4893b65c36&dd91d164d6=daad574380&7328157bb0=277750332e&fbclid=IwAR1BfHI7WDlJA_KQopLNRwuCKMU26DmvlmZJFU1-zkZr3yNNOKPmR9SVJA8`
  ).then((res) => res.text());

  const $ = cheerio.load(data);

  let genre_list: TypeGenreKomik[] = [];
  let chapter: TypeChapter[] = [];
  const obj = {} as TypeKomikID;

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
    .attr("src")!
    .replace(/.*?:\/\//g, "https://cdn.statically.io/img/");

  $(".komik_info-content-body > .komik_info-content-genre").each((idx, el) => {
    let genre_name: any = $(el)
      .find("a")
      .text()
      .split(/(?=[A-Z])/g);

    genre_list.push(...genre_name);
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
    const link_endpoint = "https://komikcast.site/komik/";
    const link_chapter_endpoint = "https://komikcast.site/chapter/";
    const data = await fetch(
      `https://komikcast.site/?426ec24061=59a4e26d32&1bec38a803=79518e3667&73b2b42ed8=60aaee3279&4a03c0d613=1530a72e37&c733506b41=5746baa435&fbclid=IwAR2t5M2CxlR44vadWguQ18lW_8qER0wOKj0O_qgoEF5lCGwK1cBQzIwNWvh`
    ).then((res) => res.text());

    const $ = cheerio.load(data);
    const element = $(".listupd");

    // console.log(element);
    const recommend_list: TypeRecommend[] = [];
    let title, type, endpoint, last_upload_endpoint, thumb, chapter, rating;

    element.find(".swiper-wrapper > .swiper-slide").each((i, el) => {
      title = $(el)
        .find("a > .splide__slide-info")
        .find(".title")
        .text()
        .trim();
      type = $(el).find("a > .splide__slide-image").find(".type").text().trim();
      thumb = $(el)
        .find("a > .splide__slide-image")
        .find("img")
        .attr("src")!
        .replace(/.*?:\/\//g, "https://cdn.statically.io/img/");
      // thumb = $(el).find()
      endpoint = $(el).find("a").attr("href")!.replace(link_endpoint, "");
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
        .attr("href")!
        .replace(link_chapter_endpoint, "");

      rating = $(el)
        .find("a > .splide__slide-info")
        .find(".other > .rate > .rating")
        .find(".numscore")
        .text();

      recommend_list.push({
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
      recommend_list,
    };
    // }
  } catch (error) {
    return {
      status: false,
      message: "error scraping",
      // recommend_list,
    };
  }
};

export const HandleKomikList = async (url: any) => {
  try {
    const link_endpoint = "https://komikcast.site/komik/";
    const chapter_link_endpoint = "https://komikcast.site/chapter/";

    const data = await fetch(`https://komikcast.site/daftar-komik/`).then(
      (res) => res.text()
    );

    const $ = cheerio.load(data);
    const element = $(".list-update");
    // console.log(element.html());

    let komik_list: TypeKomikList[] = [];
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
          .attr("src")!
          .replace(/.*?:\/\//g, "https://cdn.statically.io/img/");
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
          .attr("href")!
          .replace(chapter_link_endpoint, "");

        endpoint = $(el).find("a").attr("href")!.replace(link_endpoint, "");

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
      // komik_list,
    };
  }
};

export const HandleKomikChapterId = async (cid: any) => {
  const link_endpoint = "https://komikcast.me/komik/";
  const chapter_link = "https://komikcast.me/chapter/";

  try {
    const data = await fetch(`${chapter_link}/${cid}/`).then((res) =>
      res.text()
    );

    const $ = cheerio.load(data);
    const content = $("#content");
    let chapter_image: TypeChapterImage[] = [];
    const obj = {} as TypeKomikChapter;
    obj.komik_endpoint = cid
      .split(/-chapter\S+/gm)
      .join(" ")
      .trim();
    obj.chapter_endpoint = cid + "/";
    obj.chapter_name = cid.split("-").join(" ").trim();

    obj.title = $(".chapter_headpost > h1").text().trim();

    // const getTitlePages = content.find(".dsk2");
    // getTitlePages.filter((i, el) => {
    //   obj.title = $(getTitlePages).find("h1").text().replace("Komik ", "");
    // });

    const getPages = $(".main-reading-area > img");

    obj.chapter_page = +cid.replace(/\D+/gm, "");
    // obj.chapter_pages = chapter_pages;
    getPages.each((i, el) => {
      chapter_image.push({
        chapter_image_link: $(el)
          .attr("src")!
          .replace(/.*?:\/\//g, "https://cdn.statically.io/img/"),
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
