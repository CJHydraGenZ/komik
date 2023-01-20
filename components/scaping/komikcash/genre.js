// import axios from "axios";
// import got from "got";

import * as cheerio from "cheerio";
// import { fetcherAPI, fetch_scrapfly, fetch_scrap_ninja } from "../../function/fetch";

// const dev = process.env.NODE_ENV !== "production";

export const getGenre = async () => {
  try {
    const link_genre_endpoint = 'https://komikcast.site/genres/'
    const data = await fetch(`https://komikcast.site/`).then(res => res.text())
    const $ = cheerio.load(data);
    const element = $("#sidebar");
    // console.log(element);
    const genre_list = [];
    let genre, endpoint, jumlah;


    // type = $(el).find("a > .splide__slide-image").find(".type").text().trim();
    // thumb = $(el).find("a > .splide__slide-image").find("img").attr("src");
    // // thumb = $(el).find()
    // endpoint = $(el).find("a").attr("href").replace(link_endpoint, "");
    element.find('.genre > li').each((i, el) => {
      genre = $(el).find('a').text().replace(/\S+$/gm, '').trim()
      // genre = $(el).find('a').text()
      jumlah = $(el).find('a').text().replace(/\S+\s|\W+/gm, '')
      // jumlah = $(el).find('a').text()
      endpoint = $(el).find('a').attr('href').replace(link_genre_endpoint, '')

      genre_list.push({
        genre,
        jumlah: +jumlah,
        endpoint
      })
    })
    return {
      status: true,
      message: "success",
      genre_list,
    };

  } catch (error) {
    return {
      status: false,
      message: error
    }
  }
}
export const getGenreList = async (id) => {
  console.log(id);
  try {
    // const link_genre_endpoint = 'https://komikcast.site/genres'
    const komik_endpoint = 'https://komikcast.site/komik/'
    const data = await fetch(`https://komikcast.site/genres/${id}`).then(res => res.text())
    // console.log(data);
    const $ = cheerio.load(data);
    // const element = cheerio.load('.list-update')
    const element = $(".list-update");

    // console.log(element);
    const genre_list = []
    let thumb, title, endpoint, chapter, score;
    // .list-update_items-wrapper > .list-update_item
    element.find('.list-update_items-wrapper > .list-update_item').each((i, el) => {
      thumb = $(el).find('a > .list-update_item-image').find('img').attr('src').replace(/.*?:\/\//g,
        "https://cdn.statically.io/img/")
      title = $(el).find('a > .list-update_item-info').find('h3').text()
      endpoint = $(el).find('a').attr('href').replace(komik_endpoint, '')
      chapter = $(el).find('a > .list-update_item-info').find('.other > .chapter').text().trim()
      score = $(el).find('a > .list-update_item-info').find('.other  .numscore').text()

      genre_list.push({
        thumb,
        title,
        endpoint,
        chapter,
        score
      })
    })

    // thumb = $(el).find('a > .list-update_item-image').find('img').attr('src')
    //   title = $(el).find('a > .list-update_item-info').find('h3').text()
    //   endpoint = $(el).find('a').attr('href').replace(komik_endpoint, '')
    //   chapter = $(el).find('a > .list-update_item-info').find('.other > .chapter').text()
    //   score = $(el).find('a > .list-update_item-info').find('.other  .numscore').text()

    return {
      status: true,
      message: 'success',
      genre_list
    }

  } catch (error) {
    return {
      status: false,
      message: error
    }
  }
}


export const HandleRecommend = async () => {
  // const API = dev ? '' : `https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me&country=au`
  try {
    const link_endpoint = "https://komikcast.site/komik/";

    // const data = await fetcherAPI("https://api.scrapfly.io/scrape?key=$process.env.SCRAPFLY_API_KEY&url=https%3A%2F%2Fkomikcast.me&country=au");

    // const data = dev ? await fetch(`https://komikcast.me`).then(res => res.text()) :
    //   await fetch_scrapfly(`https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me&country=au`)
    // await fetch_scrap_ninja(`https://komikcast.me`)

    const data = await fetch(`https://komikcast.site/?426ec24061=59a4e26d32&1bec38a803=79518e3667&73b2b42ed8=60aaee3279&4a03c0d613=1530a72e37&c733506b41=5746baa435&fbclid=IwAR2t5M2CxlR44vadWguQ18lW_8qER0wOKj0O_qgoEF5lCGwK1cBQzIwNWvh`).then(res => res.text())

    // const req = await response.json();
    // const data = await req.body;
    // const v = await data.result
    // console.log(data);
    // const data = await fetcherAPI("https://komikcast.me");
    // console.log(response.status === 200);
    // console.log("ini log", data);
    // if (response.status === 200) {
    const $ = cheerio.load(data);
    // const element = $(".listupd");
    const element = $(".list-update");

    // console.log(element);
    const komik_list = [];
    let title, type, endpoint, last_upload_endpoint, thumb, chapter, rating;

    element.find(".swiper-wrapper > .swiper-slide").each((i, el) => {
      title = $(el)
        .find("a > .splide__slide-info")
        .find(".title")
        .text()
        .trim();
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
    // res.statusCode = 200;
    return {
      status: true,
      message: "success",
      komik_list,
    };
    // }
  } catch (error) {
    return {
      status: false,
      message: "error",
      komik_list,
    };
  }
};

export const HandleKomikList = async (url) => {
  // const API = dev ? 'https://komikcast.me/daftar-komik/' : url
  try {

    const link_endpoint = "https://komikcast.site/komik/";


    // https://komikcast.me/daftar-komik/

    const data = await fetch(`https://komikcast.site/daftar-komik/?be26e90c7e=4552a9aa2c&6e6e79dd1b=a41bc659ce&8091b19c8b=d6959158be&2a573a5c82=35b4a7ed16&483766e8e9=d7a6ac3c70&fbclid=IwAR2W37t3S7N3Goj5ak5ivH6B3NdE6QCBaJNxaGLEznV_ZRbPEa3QIVmDlIO`).then(res => res.text())
    // const data = dev ? await fetch(`https://komikcast.me/daftar-komik/`).then(res => res.text()) :
    //   await fetch_scrapfly(url);
    // await fetch_scrap_ninja(url)
    // const data = await fetcherAPI(url);

    const $ = cheerio.load(data);
    const element = $(".list-update");
    // console.log(element.html());

    let komik_list = [];
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
    return {
      status: true,
      message: "success",
      komik_list,
    };
  } catch (error) {
    return {
      status: false,
      message: "error",
      komik_list,
    };
  }
};

export const HandleKomikChapterId = async (cid) => {
  const link_endpoint = "https://komikcast.me/komik/";
  const chapter_link = "https://komikcast.me/chapter/";
  // const chaptera_link =
  //   "https://komikcast.me/chapter/chikashitsu-dungeon-binbou-kyoudai-wa-goraku-o-motomete-saikyou-e-chapter-29-bahasa-indonesia/";

  // const { cid } = req.query;
  // const API = dev ? `${chapter_link}/${cid}/` : `https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me%2Fchapter%2F${cid}%2F&tags=project%3Adefault&country=au`


  try {
    // const response = await AxiosService(`${chapter_link}/${cid}/`);
    // const data = await fetcherAPI(`${chapter_link}/${cid}`)
    // let a = `https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me%2Fchapter%2F${cid}%2F&tags=project%3Adefault&country=au`
    // const data = await fetcherAPI(`https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me%2Fchapter%2F${cid}%2F&tags=project%3Adefault&country=au`);

    // const data = dev ? await fetch(`${chapter_link}/${cid}/`).then(res => res.text()) :
    //   await fetch_scrapfly(`https://api.scrapfly.io/scrape?key=${process.env.SCRAPFLY_API_KEY}&url=https%3A%2F%2Fkomikcast.me%2Fchapter%2F${cid}%2F&tags=project%3Adefault&country=au`)
    const data = await fetch(`${chapter_link}/${cid}/`).then(res => res.text())
    // await fetch_scrap_ninja(`${chapter_link}/${cid}/`)

    // console.log("data chpater", data);
    const $ = cheerio.load(data);
    const content = $("#content");
    let chapter_image = [];
    const obj = {};
    obj.komik_endpoint = cid.split(/-chapter\S+/gm).join(" ").trim()
    obj.chapter_endpoint = cid + "/";
    obj.chapter_name = cid.split("-").join(" ").trim();

    obj.title = $(".chapter_headpost > h1").text().trim();

    const getTitlePages = content.find(".dsk2");
    getTitlePages.filter(() => {
      obj.title = $(getTitlePages).find("h1").text().replace("Komik ", "");
    });

    const getPages = $(".main-reading-area > img");

    // const getPages = $('#chimg > img')
    obj.chapter_pages = getPages.length;
    getPages.each((i, el) => {
      chapter_image.push({
        chapter_image_link: $(el).attr("src")
          .replace(/.*?:\/\//g,
            "https://cdn.statically.io/img/"),
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
