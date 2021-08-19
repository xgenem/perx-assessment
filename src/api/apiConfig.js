import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "Accept: application/vnd.github.v3+json",
  },
});
