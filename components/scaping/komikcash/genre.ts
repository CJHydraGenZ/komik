import { type } from "os";
import * as cheerio from "cheerio";
import { GenreList, GenreType } from "components/type/genreType";

export const getGenre = async () => {
  try {
    const link_genre_endpoint = "https://komikcast.site/genres/";
    const data = await fetch(`https://komikcast.site/`).then((res) =>
      res.text()
    );
    const $ = cheerio.load(data);
    const element = $("#sidebar");
    // console.log(element);
    const genre_list: GenreType[] = [];
    let genre, endpoint, jumlah;

    element.find(".genre > li").each((i, el) => {
      genre = $(el).find("a").text().replace(/\S+$/gm, "").trim();
      // genre = $(el).find('a').text()
      jumlah = $(el)
        .find("a")
        .text()
        .replace(/\S+\s|\W+/gm, "");
      // jumlah = $(el).find('a').text()
      endpoint = $(el).find("a").attr("href")!.replace(link_genre_endpoint, "");

      genre_list.push({
        genre,
        jumlah: +jumlah,
        endpoint,
      });
    });
    return {
      status: true,
      message: "success",
      genre_list,
    };
  } catch (error) {
    return {
      status: false,
      message: error,
    };
  }
};
export const getGenreList = async (id: any) => {
  console.log(id);

  try {
    // const link_genre_endpoint = 'https://komikcast.site/genres'
    const komik_endpoint = "https://komikcast.site/komik/";
    const data = await fetch(`https://komikcast.site/genres/${id}`).then(
      (res) => res.text()
    );
    // console.log(data);
    const $ = cheerio.load(data);
    // const element = cheerio.load('.list-update')
    const element = $(".list-update");

    // console.log(element);
    const genre_list: GenreList[] = [];
    let thumb, title, endpoint, chapter, score;
    // .list-update_items-wrapper > .list-update_item
    element
      .find(".list-update_items-wrapper > .list-update_item")
      .each((i, el) => {
        thumb = $(el)
          .find("a > .list-update_item-image")
          .find("img")
          .attr("src")!
          .replace(/.*?:\/\//g, "https://cdn.statically.io/img/");
        title = $(el).find("a > .list-update_item-info").find("h3").text();
        endpoint = $(el).find("a").attr("href")!.replace(komik_endpoint, "");
        chapter = $(el)
          .find("a > .list-update_item-info")
          .find(".other > .chapter")
          .text()
          .trim();
        score = $(el)
          .find("a > .list-update_item-info")
          .find(".other  .numscore")
          .text();

        genre_list.push({
          thumb,
          title,
          endpoint,
          chapter,
          score,
        });
      });

    return {
      status: true,
      message: "success",
      genre_list,
    };
  } catch (error) {
    return {
      status: false,
      message: error,
    };
  }
};
