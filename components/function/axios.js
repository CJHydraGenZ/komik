import axios from "axios";
// import axiosCookieJarSupport from "axios-cookiejar-support";
// import { wrapper } from "axios-cookiejar-support";
// import { CookieJar } from "tough-cookie";
// const { server } = require("config");



// // const axios = require("axios").default;
// // const baseUrl = require("../constants/urls");
// // const axiosCookieJarSupport = require("axios-cookiejar-support");
// // axiosCookieJarSupport(axios);

// const jar = new CookieJar();
// export const client = wrapper(axios.create({ jar }));

// axios.defaults.baseURL = "https://komikcast.me";

// export const AxiosService = async (url) => {
//   return new Promise(async (resolve, reject) => {
//     const _url = url == null ? url : encodeURI(url);
//     try {
//       const response = await axios.get(_url);
//       if (response.status === 200) {
//         return resolve(response);
//       }
//       return reject(response);
//     } catch (error) {
//       return reject(error.message);
//     }
//   });
// };
// module.exports = AxiosService;
