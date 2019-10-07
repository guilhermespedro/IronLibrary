import axios from "axios";

const postApi = axios.create({
  baseURL: "/api/product/video"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    postApi
      .get("/")
      .then(response => {
        resolve(response.data.videos);
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
        resolve(response.data.video);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const create = videoData => {
  return new Promise((resolve, reject) => {
    postApi
      .post("/create", videoData)
      .then(response => {
        resolve(response.data.video);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const edit = (id, updatedVideo) => {
  return new Promise((resolve, reject) => {
    postApi
      .patch(`/edit/${id}`, updatedVideo)
      .then(response => {
        resolve(response.data.video);
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
