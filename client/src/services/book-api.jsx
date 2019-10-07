import axios from "axios";

const bookApi = axios.create({
  baseURL: "/api/product/book"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    bookApi
      .get("/")
      .then(response => {
        resolve(response.data.books);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    bookApi
      .get(`/${id}`)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const create = bookData => {
  return new Promise((resolve, reject) => {
    bookApi
      .post("/create", bookData)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const edit = (id, updatedBook) => {
  return new Promise((resolve, reject) => {
    bookApi
      .patch(`/edit/${id}`, updatedBook)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const upload = (id, uploadCoverBook) => {
  return new Promise((resolve, reject) => {
    bookApi
      .patch(`/upload/${id}`, uploadCoverBook)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const remove = id => {
  return new Promise((resolve, reject) => {
    bookApi
      .delete(`/delete/${id}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
