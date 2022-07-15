import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const link_endpoint = "https://komikcast.me/komik/";

  const { genre = "", statusS = "", typeS = "", orderBy = "" } = req.body;
  // console.log("inii pst", req.body);
  const url =
    req.method === "POST"
      ? `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
      : `https://komikcast.me/daftar-komik/`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const element = $(".list-update");

  //     const genre = "comedy";
  // const statusS = "Ongoing";
  // const typeS = "manga";
  // const orderBy = "popular";
  // const { data } = await axios.get(
  //   `https://komikcast.me/daftar-komik/?genre%5B%5D=${genre}&status=${statusS}&type=${typeS}&orderby=${orderBy}`
  // );
  let komik_list = [];
  let title, type, endpoint, thumb, chapter, rating, last_upload_endpoint;

  switch (req.method) {
    case "GET":
      // console.log(element);

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

      return res.status(200).json({
        status: true,
        message: "success",
        komik_list,
      });

    case "POST":
      try {
        element
          .find(".list-update_items-wrapper > .list-update_item")
          .each((i, el) => {
            title = $(el)
              .find("a > .list-update_item-info")
              .find("h3")
              .text()
              .trim();
            type = $(el)
              .find("a > .list-update_item-image")
              .find(".type")
              .text();
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
            rating = $(el)
              .find("a > .list-update_item-info")
              .find(".other > .rate > .rating")
              .find(".numscore")
              .text();
            // .trim();
            endpoint = $(el).find("a").attr("href").replace(link_endpoint, "");

            komik_list.push({
              title,
              type,
              thumb,
              chapter,
              endpoint,
              rating,
              last_upload_endpoint,
            });
          });

        return res.status(200).json({
          status: true,
          message: "success",
          komik_list,
        });
      } catch (error) {
        console.log(error);
      }

    default:
      return res.status(200).json({
        status: true,
        message: "success",
        komik_list,
      });
  }
}
