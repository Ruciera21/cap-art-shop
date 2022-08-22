import axios from "axios";

const baseURL =
  "https://630328399eb72a839d7a0716.mockapi.io/detailproduct/;

const mockApi = axios.create({
  baseURL: String(baseURL),
});

export default mockApi;
