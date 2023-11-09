import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { id: "65439e9824728d15d515384d" },
  timeout: 5000,
});
export default instance;

//https://openmarket.onrender.com/
