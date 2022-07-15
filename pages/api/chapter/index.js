import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const link_endpoint = "https://komikcast.me/komik/";
  const { data } = await axios.get("https://komikcast.me");
  // console.log('req params', req.para);
  const $ = cheerio.load(data);
  const element = $(".listupd");
  let komik_list = [];

  // console.log(element);
  let title, type, endpoint, last_upload_endpoint, thumb, chapter, rating;

  element.find(".swiper-wrapper > .swiper-slide").each((i, el) => {
    title = $(el).find("a > .splide__slide-info").find(".title").text().trim();
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

  return res.status(200).json({
    status: true,
    message: "success",
    komik_list,
  });
}
