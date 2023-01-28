

// const axios = require("axios");
import axios from "axios";

import ky from 'ky';

export const fetch_scrapfly = (url, options) =>
  fetch(url, options).then(res => res.json()).then(res => res.result.content)


let headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json",
  "User-Agent": "Statically-Images/2.0"
});
export const fetcher = async (url) => await ky.get(url).json()
export const fetcherAxios = (url) => axios.get(url).then(res => res.data)



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

