import axios from "axios";
import * as cheerio from "cheerio";
import { cors, runMiddleware } from "components/middleware";

// import Cors from "cors";

// Initializing the cors middleware

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    const { kid } = req.query;
    const link_endpoint = "https://komikcast.me/komik";
    const chapter_link = "https://komikcast.me/chapter/";
    let endpoint;
    console.log(kid);
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

    // element.find(".genre > li").each((idx, el) => {
    //   let genre_name = $(el).find("a").text();
    //   genre_list.push({
    //     genre_name,
    //   });
    // });
    $(".komik_info-content-body > .komik_info-content-genre").each(
      (idx, el) => {
        let genre_name = $(el)
          .find("a")
          .text()
          .split(/(?=[A-Z])/g);

        genre_list.push({
          genre_name,
        });
      }
    );
    obj.synopsis = $(
      ".komik_info-description > .komik_info-description-sinopsis"
    )
      .find("p")
      .text()
      .trim();

    // obj.type = $(".komik_info-content-body > .komik_info-content-meta")
    //   .find(".komik_info-content-info-type")
    //   .text();
    // obj.type = $(".komik_info-content-body > .komik_info-content-meta")
    //   .find(".komik_info-content-info-type")
    //   .text();
    // obj.type = $(".komik_info-content-body > .komik_info-content-meta")
    //   .find(".komik_info-content-info-type")
    //   .text();
    // obj.author = $(
    //   "#Informasi > table > tbody > tr:nth-child(4) > td:nth-child(2)"
    // )
    //   .text()
    //   .trim();
    // obj.status = $(getMeta).children().eq(4).find("td:nth-child(2)").text();

    // /* Set Manga Endpoint */
    // obj.manga_endpoint = kid;

    // /* Get Manga Thumbnail */
    // obj.thumb = element.find(".ims > img").attr("src");

    obj.genre_list = genre_list || [];

    // obj.genre_list = genre_list || [];

    // /* Get Synopsis */
    // const getSinopsis = element.find("#Sinopsis").first();
    // obj.synopsis = $(getSinopsis).find("p").text().trim();

    /* Get Chapter List */
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

    return res.status(200).json(obj);
  } catch (error) {
    return res.status(404).json({
      status: false,
      message: "gagal adad eror",
      // komik_list,
    });

    // res.status(200).json({ Post: kid, Res: kid });
  }
}
