import { USERS } from "../constants/api";
import { API } from "./apiConfig";

export const getUserRepos = (user) =>
  new Promise((resolve, reject) => {
    return API.get(USERS + "/" + user + "/repos")
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
