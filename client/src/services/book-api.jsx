import axios from 'axios';

const bookApi = axios.create({
  baseURL: '/api/product/book'
});

export const list = () => {
  return new Promise((resolve, reject) => {
    bookApi
      .get('/')
      .then(response => {
        resolve(response.data.books);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = isbn => {
  return new Promise((resolve, reject) => {
    bookApi
      .get(`/${isbn}`)
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
      .post('/create', bookData)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const edit = (isbn, updatedBook) => {
  return new Promise((resolve, reject) => {
    bookApi
      .patch(`/edit/${isbn}`, updatedBook)
      .then(response => {
        resolve(response.data.book);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const remove = isbn => {
  return new Promise((resolve, reject) => {
    bookApi
      .delete(`/${isbn}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
