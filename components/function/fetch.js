

// const axios = require("axios");
import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'https://scrapeninja.p.rapidapi.com/scrape',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '2c852202f9msha06be18b51b4ec6p1ea7d3jsne1c7731ebef2',
//     'X-RapidAPI-Host': 'scrapeninja.p.rapidapi.com'
//   },
//   data: '{"url":"https://news.ycombinator.com/"}'
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export const fetch_scrapfly = (url, options) =>
  fetch(url, options).then(res => res.json()).then(res => res.result.content)

export const fetch_scrap_ninja = (url) => axios.request({
  method: 'POST',
  url: 'https://scrapeninja.p.rapidapi.com/scrape',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'scrapeninja.p.rapidapi.com'
  },
  data: `{"url":"${url}"}`
}).then(res => res.data)
// export const fetcherAPI = (url, options) =>
//   fetch(url, options).then(res => res.text())

