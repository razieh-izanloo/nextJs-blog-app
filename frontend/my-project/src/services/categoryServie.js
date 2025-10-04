import http from "./httpService";

export async function getCategoryApi() {
  const data  = http.get("/category/list").then(({ data }) => data.data);
  return data;
}

const categoryApi = {
  getCategoryApi,
};

export default categoryApi;
