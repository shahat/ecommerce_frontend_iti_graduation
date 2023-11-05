import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { id: "651708f64b8ed0536c299140" },
  timeout: 5000,
});
export default instance;

//https://openmarket.onrender.com/
