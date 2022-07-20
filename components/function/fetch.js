// export const getData = async () => {
//   try {
//     // setLoading(true);
//     const { data } = await AxiosAPP(`/api/komik`);
//     setData(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     // setLoading(false);
//   }
// };
// const fetch = require("node-fetch");

export const fetcher = (url) => fetch(url).then((res) => res.json());
// export const fetcherAPI = (url) =>
//   fetch("https://scrapeninja.p.rapidapi.com/scrape", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-rapidapi-host": "scrapeninja.p.rapidapi.com",
//       "x-rapidapi-key": process.env.RAPID_API_KEY,
//     },
//     body: JSON.stringify({
//       geo: "eu",
//       url: url,
//     }),
//   })
//     .then((res) => res.json())
//     .then((req) => req.body);
let headers = new Headers({
  // "Content-Type": "application/json",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
  Referer: "https://google.com",
  DNT: "1",
  Cahya: "sahhda",
});
export const fetcherAPI = (url) =>
  fetch(url, {
    method: "GET",
    headers: headers,
  }).then((res) => res.text());
// .then((req) => req.body);
