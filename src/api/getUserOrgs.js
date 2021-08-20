import { USERS } from "../constants/api";
import { API } from "./apiConfig";

export const getUserOrgs = (user) =>
  new Promise((resolve, reject) => {
    return API.get(USERS + "/" + user + "/orgs")
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
