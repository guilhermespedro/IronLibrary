import axios from "axios";

const authenticationApi = axios.create({
  baseURL: "/api/auth"
});

export const signUp = ({ name, email, password, country, phoneNumber }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/sign-up", { name, email, password, country, phoneNumber })
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const logIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/log-in", { email, password })
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const logOut = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/log-out")
      .then(response => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const verify = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .get("/verify")
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
