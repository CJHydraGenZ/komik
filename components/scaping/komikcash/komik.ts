import * as cheerio from "cheerio";
import {
  TextList,
  TypeKomikList,
  TypeListText,
} from "components/type/komikType";

export const getListPage = async (id: any) => {
  try {
    const link_endpoint = "https://komikcast.site/komik/";
    const chapter_link_endpoint = "https://komikcast.site/chapter/";
    const data = await fetch(
      `https://komikcast.site/daftar-komik/page/${id}`
    ).then((res) => res.text());
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
      message: error,
    };
  }
};

export const getListText = async () => {
  try {
    const link_endpoint = "https://komikcast.site/komik/";
    const chapter_link_endpoint = "https://komikcast.site/chapter/";
    const data = await fetch(`https://komikcast.site/daftar-komik/?list`).then(
      (res) => res.text()
    );
    const $ = cheerio.load(data);
    const element = $(".list-update");

    let komik_list: TypeListText[] = [];
    // let title, type, endpoint, thumb, chapter, rating, last_upload_endpoint;
    element.find(".text-mode_list-items").each((i, el) => {
      const alphabet = $(el).find("span > a").text();
      const text_list: TextList[] = [];
      $(el)
        .find("ul > li")
        .each((i, elem) => {
          const endpoint = $(elem)
            .find("a")
            .attr("href")!
            .replace(link_endpoint, "");
          const title = $(elem).find("a").text();
          text_list.push({
            title,
            endpoint,
          });
        });
      komik_list.push({
        alphabet,
        text_list,
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
      message: error,
    };
  }
};
