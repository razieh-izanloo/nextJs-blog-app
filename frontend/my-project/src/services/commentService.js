import http from "./httpService";

export const createCommentApi = async (data, options) => {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
};

export const getAllCommentsApi = async (options = {}) => {
  return http.get("/comment/list", options).then(({ data }) => data.data);
};

export async function deleteCommentApi(id, options = {}) {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function updateCommentApi({ id, data }, options = {}) {
  return http
    .patch(`/comment/update/${id}`, data, options)
    .then(({ data }) => data.data);
}

const commentApi = {
  createCommentApi,
  getAllCommentsApi,
  updateCommentApi,
};

export default commentApi;
