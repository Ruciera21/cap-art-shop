import apiMock from "../mocks";

const api = {
  getAll: (page = 1, limit = 10, sortBy = "", order = "") =>
    apiMock.get(
      `/product?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`
    ),
  getById: (id) => apiMock.get(`/product/${id}`),
};

export default api;
