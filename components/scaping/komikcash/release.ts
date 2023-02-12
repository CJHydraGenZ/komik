import * as cheerio from "cheerio";
import { TypeChapterList, TypeReleaseList } from "components/type/releaseType";

export const getLastRelease = async () => {
  try {
    const link_komik_endpoint = "https://komikcast.site/komik/";
    const link_chapter_endpoint = "https://komikcast.site/chapter/";
    const data = await fetch(`https://komikcast.site/`).then((res) =>
      res.text()
    );
    const $ = cheerio.load(data);
    const element = $(".listupd");
    // console.log(element);
    const release_list: TypeReleaseList[] = [];
    // const thumb, title, endpoint, chapter_endpoint, date;

    element.find(".utao .uta").each((i, el) => {
      const thumb = $(el)
        .find(".uta > .imgu")
        .find("a")
        .find("img")
        .attr("src")!
        .replace(/.*?:\/\//g, "https://cdn.statically.io/img/");
      // genre = $(el).find('a').text()
      const title = $(el).find(".uta > .luf").find("a").find("h3").text();
      // const jumlah = $(el).find('a').text()
      const endpoint = $(el)
        .find("a")
        .attr("href")!
        .replace(link_komik_endpoint, "");
      // const chapter = $(el).find('.uta > .luf').find('ul > li:nth-child(1) > a').text()
      const chapter_list: TypeChapterList[] = [];
      $(el)
        .find(".uta > .luf")
        .find("ul > li")
        .each((i, ele) => {
          const chapter = $(ele)
            .find("a")
            .text()
            .replace(/^\S+\s/gm, "");
          const chapter_endpoint = $(ele)
            .find("a")
            .attr("href")!
            .replace(link_chapter_endpoint, "");
          const release = $(ele).find("span").text();
          chapter_list.push({
            chapter: +chapter,
            chapter_endpoint,
            release,
          });
        });

      release_list.push({
        thumb,
        title,
        endpoint,
        chapter_list,
        // jumlah
      });
    });
    return {
      status: true,
      message: "success",
      release_list,
    };
  } catch (error) {
    return {
      status: false,
      message: error,
    };
  }
};
