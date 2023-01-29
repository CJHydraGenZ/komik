

import * as cheerio from "cheerio";


export const getLastRelease = async () => {
  try {
    const link_komik_endpoint = 'https://komikcast.site/komik/'
    const link_chapter_endpoint = 'https://komikcast.site/chapter/'
    const data = await fetch(`https://komikcast.site/`).then(res => res.text())
    const $ = cheerio.load(data);
    const element = $(".listupd");
    // console.log(element);
    const release_list = [];
    // const thumb, title, endpoint, chapter_endpoint, date;


    element.find('.utao .uta').each((i, el) => {
      const thumb = $(el).find('.uta > .imgu').find('a').find('img').attr('src').replace(/.*?:\/\//g,
        "https://cdn.statically.io/img/")
      // genre = $(el).find('a').text()
      const title = $(el).find('.uta > .luf').find('a').find('h3').text()
      // const jumlah = $(el).find('a').text()
      const endpoint = $(el).find('a').attr('href').replace(link_komik_endpoint, '')
      // const chapter = $(el).find('.uta > .luf').find('ul > li:nth-child(1) > a').text()
      const chapter_list = []
      $(el).find('.uta > .luf').find('ul > li').each((i, ele) => {


        const chapter = $(ele).find('a').text().replace(/^\S+\s/gm, '')
        const chapter_endpoint = $(ele).find('a').attr('href').replace(link_chapter_endpoint, '')
        const release = $(ele).find('span').text()
        chapter_list.push({
          chapter: +chapter,
          chapter_endpoint,
          release
        })
      })




      release_list.push({
        thumb,
        title,
        endpoint,
        chapter_list
        // jumlah
      })
    })
    return {
      status: true,
      message: "success",
      release_list,
    };

  } catch (error) {
    return {
      status: false,
      message: error
    }
  }
}
// }

// export const getGenreList = async (id) => {
//   console.log(id);
//   try {
//     // const link_genre_endpoint = 'https://komikcast.site/genres'
//     const komik_endpoint = 'https://komikcast.site/komik/'
//     const data = await fetch(`https://komikcast.site/genres/${id}`).then(res => res.text())
//     // console.log(data);
//     const $ = cheerio.load(data);
//     // const element = cheerio.load('.list-update')
//     const element = $(".list-update");

//     // console.log(element);
//     const genre_list = []
//     let thumb, title, endpoint, chapter, score;
//     // .list-update_items-wrapper > .list-update_item
//     element.find('.list-update_items-wrapper > .list-update_item').each((i, el) => {
//       thumb = $(el).find('a > .list-update_item-image').find('img').attr('src').replace(/.*?:\/\//g,
//         "https://cdn.statically.io/img/")
//       title = $(el).find('a > .list-update_item-info').find('h3').text()
//       endpoint = $(el).find('a').attr('href').replace(komik_endpoint, '')
//       chapter = $(el).find('a > .list-update_item-info').find('.other > .chapter').text().trim()
//       score = $(el).find('a > .list-update_item-info').find('.other  .numscore').text()

//       genre_list.push({
//         thumb,
//         title,
//         endpoint,
//         chapter,
//         score
//       })
//     })


//     return {
//       status: true,
//       message: 'success',
//       genre_list
//     }

//   } catch (error) {
//     return {
//       status: false,
//       message: error
//     }
//   }
// }

