"use strict";

import axios from "axios";

const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1"
});

export const load = isbn => {
  return new Promise((resolve, reject) => {
    googleBooksApi
      .get(`/volumes?q=isbn:${isbn}`)
      .then(response => {
        const items = response.data.items;
        if (items.length) {
          resolve(items[0]);
        } else {
          resolve(null);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
