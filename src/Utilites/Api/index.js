import axios from "axios";

import { BASE_URL } from "../../Constants/Api";

const postHeaders = () => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  // if (accessToken && accessToken !== "") {
  //   headers["X_AUTH_TOKEN"] = accessToken;
  // }
  return { headers };
};

const getHeaders = () => {
  // const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
  };
  // if (accessToken && accessToken !== "") {
  //   headers["X_AUTH_TOKEN"] = accessToken;
  // }
  return { headers };
};

export const getApiCall = (apiUrl) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BASE_URL + apiUrl, getHeaders())
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
    }
  });
};

export const apiCall = (apiUrl, postData) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(BASE_URL + apiUrl, JSON.stringify(postData), postHeaders())
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
    }
  });
};
