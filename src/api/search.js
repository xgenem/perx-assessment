import { SEARCH_USERS } from "../constants/api";
import { API } from "./apiConfig";

export const searchUser = (user) =>
  new Promise((resolve, reject) => {
    return API.get(SEARCH_USERS, {
      params: {
        q: user,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
