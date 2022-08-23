import axios from "axios";

const baseURL = "https://630451300de3cd918b44fb3d.mockapi.io/";

const apiMock = axios.create({
  baseURL: String(baseURL),
});

export default apiMock;
