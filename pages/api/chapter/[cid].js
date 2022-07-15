import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const link_endpoint = "https://komikcast.me/komik/";
  const chapter_link = "https://komikcast.me/chapter/";
  const chaptera_link =
    "https://komikcast.me/chapter/chikashitsu-dungeon-binbou-kyoudai-wa-goraku-o-motomete-saikyou-e-chapter-29-bahasa-indonesia/";

  // const { data } = await axios.get("https://komikcast.me");
  // console.log('req params', req.para);
  // const $ = cheerio.load(data);
  // const element = $(".listupd");
  // let komik_list = [];

  // console.log(element);
  let title, type, endpoint, last_upload_endpoint, thumb, chapter, rating;

  const { cid } = req.query;
  try {
    // const response = await AxiosService(`${chapter_link}/${cid}/`);
    // const response = await axios.get(`https://komikcast.id/${cid}`)
    const { data } = await axios.get(`${chapter_link}/${cid}/`);
    const $ = cheerio.load(data);
    const content = $("#content");
    let chapter_image = [];
    const obj = {};
    obj.chapter_endpoint = cid + "/";
    obj.chapter_name = cid.split("-").join(" ").trim();

    obj.title = $(".chapter_headpost > h1").text().trim();
    /**
     * @Komiku
     */
    const getTitlePages = content.find(".dsk2");
    getTitlePages.filter(() => {
      obj.title = $(getTitlePages).find("h1").text().replace("Komik ", "");
    });

    /**
     * @Komiku
     */
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
    res.status(200).json(obj);
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: error,
      chapter_image: [],
    });
  }
  // return res.status(200).json({
  //   status: true,
  //   message: "success",
  //   komik_list,
  // });
}
