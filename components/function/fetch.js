

// const axios = require("axios");
import axios from "axios";



export const fetch_scrapfly = (url, options) =>
  fetch(url, options).then(res => res.json()).then(res => res.result.content)
export const fetcher = (url, options) =>
  fetch(url, options).then(res => res.json())

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

