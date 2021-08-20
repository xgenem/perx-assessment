import { USERS } from "../constants/api";
import { API } from "./apiConfig";

export const getUserInfo = (user) =>
  new Promise((resolve, reject) => {
    return API.get(USERS + "/" + user)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
