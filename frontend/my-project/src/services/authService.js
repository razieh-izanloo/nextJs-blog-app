import http from "./httpService";

export const signupApi = async (data) => {
  return http.post("/user/signup", data).then(({ data }) => data.data);
};

export const signinApi = async (data) => {
  return http.post("/user/signin", data).then(({ data }) => data.data);
};

export const getUserApi = async (data) => {
  return http.get("/user/profile", data).then(({ data }) => data.data);
};

export const getAllUsersApi = async (data, option) => {
  return http.get("/user/list", data, option).then(({ data }) => data.data);
};

