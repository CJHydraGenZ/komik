import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { data } = await axios.get("https://komikcast.me");
  const $ = cheerio.load(data);
  const element = $(".listupd");
  let komik_list = [];

  console.log(element);
  let title, type, endpoint, thumb, chapter, rating;

  element.find(".swiper-wrapper > .swiper-slide").each((i, el) => {
    title = $(el).find("a > .splide__slide-info").find(".title").text().trim();
    type = $(el).find("a > .splide__slide-image").find(".type").text().trim();
    thumb = $(el).find("a > .splide__slide-image").find("img").attr("src");
    // thumb = $(el).find()
    chapter = $(el)
      .find("a > .splide__slide-info")
      .find(".other")
      .find(".chapter")
      .text()
      .trim();
    endpoint = $(el)
      .find("a > .splide__slide-info")
      .find(".other")
      .find(".chapter")
      .attr("href");

    rating = $(el)
      .find("a > .splide__slide-info")
      .find(".other > .rate > .rating")
      .find(".numscore")
      .text();

    komik_list.push({ title, type, thumb, chapter, endpoint, rating });
  });

  return res.status(200).json({
    status: true,
    message: "success",
    komik_list,
  });
}
