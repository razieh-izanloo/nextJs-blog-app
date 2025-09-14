import http from "./httpService";

export const createCommentApi = async (data, options) => {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
};
