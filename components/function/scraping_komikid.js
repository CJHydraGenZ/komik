import axios from "axios";
// import got from "got";

import * as cheerio from "cheerio";
import { fetcherAPI } from "./fetch";

const replaceMangaPage = "https://komiku.id/manga/";

export const HandleListPage = async (pagenumber) => {
  // let pagenumber = req.params.pagenumber;
  let url =
    pagenumber === "1"
      ? "https://data.komiku.id/pustaka/"
      : `https://data.komiku.id/pustaka/page/${pagenumber}/`;

  // try {
  const data = await fetcherAPI(url);
  console.log(url);
  // if (response.status === 200) {
  const $ = cheerio.load(data);
  const element = $(".perapih");
  let manga_list = [];
  let title, type, updated_on, endpoint, thumb, chapter;

  element.find(".daftar > .bge").each((idx, el) => {
    title = $(el).find(".kan > a").find("h3").text().trim();
    endpoint = $(el).find("a").attr("href").replace(replaceMangaPage, "");
    type = $(el).find(".bgei > a").find(".tpe1_inf > b").text();
    updated_on = $(el).find(".kan > span").text().split("• ")[1].trim();
    thumb = $(el).find(".bgei > a").find("img").attr("data-src");
    chapter = $(el)
      .find("div.kan > div:nth-child(5) > a > span:nth-child(2)")
      .text();
    manga_list.push({
      title,
      thumb,
      type,
      updated_on,
      endpoint,
      chapter,
    });
  });
  return {
    status: true,
    message: "success",
    manga_list,
  }


  // }
}


export const HandleDetailId = async (kid) => {
  // const kid = req.params.slug;
  let endpoint;
  // console.log(slug);
  if (kid === "tokyo%e5%8d%8drevengers") {
    endpoint = "tokyo卍revengers/";
  } else {
    endpoint = kid;
  }

  const data = await fetcherAPI(`https://komiku.id/manga/${endpoint}/`);
  const $ = cheerio.load(data);
  const element = $(".perapih");
  console.log(element);
  let genre_list = [];
  let chapter = [];
  const obj = {};

  /* Get Title, Type, Author, Status */
  const getMeta = element.find(".inftable > tbody").first();
  obj.title = $("#Judul > h1").text().trim();
  obj.type = $("tr:nth-child(2) > td:nth-child(2)").find("b").text();
  obj.author = $(
    "#Informasi > table > tbody > tr:nth-child(4) > td:nth-child(2)"
  )
    .text()
    .trim();
  obj.status = $(getMeta).children().eq(4).find("td:nth-child(2)").text();

  /* Set Manga Endpoint */
  obj.manga_endpoint = kid;

  /* Get Manga Thumbnail */
  obj.thumb = element.find(".ims > img").attr("src");

  element.find(".genre > li").each((idx, el) => {
    let genre_name = $(el).find("a").text();
    genre_list.push({
      genre_name,
    });
  });

  obj.genre_list = genre_list || [];

  /* Get Synopsis */
  const getSinopsis = element.find("#Sinopsis").first();
  obj.synopsis = $(getSinopsis).find("p").text().trim();

  /* Get Chapter List */
  $("#Daftar_Chapter > tbody")
    .find("tr")
    .each((index, el) => {
      let chapter_title = $(el).find("a").text().trim();
      let chapter_endpoint = $(el).find("a").attr("href");
      if (chapter_endpoint !== undefined) {
        const rep = chapter_endpoint.replace("/ch/", "");
        chapter.push({
          chapter_title,
          chapter_endpoint: rep,
        });
      }
      obj.chapter = chapter;
    });

  return obj

}



export const HandleChapterId = async (slug) => {
  // try {
  const data = await fetcherAPI(`https://komiku.id/ch/${slug}/`);
  // const response = await axios.get(`https://komikcast.id/${slug}`)
  const $ = cheerio.load(data);
  const content = $("#article");
  let chapter_image = [];
  const obj = {};
  obj.chapter_endpoint = slug + "/";
  obj.chapter_name = slug.split('-').join(' ').trim()

  obj.title = $('#Judul > h1').text().trim()
  /**
   * @Komiku
   */
  const getTitlePages = content.find(".dsk2")
  getTitlePages.filter(() => {
    obj.title = $(getTitlePages).find("h1").text().replace("Komik ", "");
  });

  /**
   * @Komiku
   */
  const getPages = $('#Baca_Komik > img')

  // const getPages = $('#chimg > img')
  obj.chapter_pages = getPages.length;
  getPages.each((i, el) => {
    chapter_image.push({
      chapter_image_link: $(el).attr("src").replace('i0.wp.com/', ''),
      image_number: i + 1,
    });
  });
  obj.chapter_image = chapter_image;
  return obj

}