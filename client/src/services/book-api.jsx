import axios from "axios";

const postApi = axios.create({
  baseURL: "/api/product/book"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    postApi
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
    postApi
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
    postApi
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
    postApi
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
    postApi
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
    postApi
      .delete(`/delete/${id}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
