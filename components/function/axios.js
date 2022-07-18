import axios from "axios";

const { server } = require("config");

export const AxiosAPP = axios.create({
  baseURL: server,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});
