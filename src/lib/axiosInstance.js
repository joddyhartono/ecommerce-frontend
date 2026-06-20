import axios, { AxiosHeaders } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5136",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAxiosHeader = () => {
  const token = localStorage.getItem("token");
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export { setAxiosHeader };

export default instance;
