import http from "./httpService";

export const createCommentApi = async (data, options) => {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
};

export const getAllCommentsApi = async (options = {}) => {
  return http.get("/comment/list", options).then(({ data }) => data.data);
};
