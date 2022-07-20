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
const fetch = require("node-fetch");

export const fetcher = (url) => fetch(url).then((res) => res.json());
export const fetcherAPI = (url) =>
  fetch("https://scrapeninja.p.rapidapi.com/scrape", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "scrapeninja.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_API_KEY,
    },
    body: JSON.stringify({
      url: url,
    }),
  })
    .then((res) => res.json())
    .then((req) => req.body);
