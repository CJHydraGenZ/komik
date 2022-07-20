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
// const HttpsProxyAgent = require("https-proxy-agent");
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
// //     .then((req) => req.body);
// let headers = new Headers({
//   // "Content-Type": "application/json",
// });
// const proxyAgent = new HttpsProxyAgent('http://46.250.171.31:8080');
const userAgent = [
  "Lynx/2.8.8pre.4 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/2.12.23",
  "Wget/1.15 (linux-gnu)",
  "Mozilla/5.0 (Linux; Android 7.0; HTC 10 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7",
  "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-N910F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-N900 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-G570Y Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36",
  " Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
  " Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4",
  "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
  "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; MDDCJS)",
  " Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0;  Trident/5.0)",
  "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)",
  "Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)",
  "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
];

// const randomArray = (length) =>
//   userAgent.fill().map(() => Math.round(Math.random() * length));

// export const fetcherAPI = (url, options, timeout) => {
//   return Promise.race([
//     fetch(url, options).then((res) => res.text()),
//     new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("timeout")), timeout)
//     ),
//   ]);
// };
let randomAgent = userAgent[Math.floor(Math.random() * userAgent.length)];

export const fetcherAPI = (url) =>
  fetch(url, {
    // method: "GET",
    headers: {
      "User-Agent": randomAgent,
      "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
      "Referer": "https://google.com",
      "DNT": "1",
      "Cahya": "sahhda"
    },
  }).then((res) => res.text());
// .then((req) => req.body);
