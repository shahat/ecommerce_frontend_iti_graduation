import axios from "axios";
const instance = axios.create({
  // baseURL: "https://glorious-space-eureka-594p7pwg97qh74q-8080.app.github.dev/",
  baseURL: "http://localhost:8080",
  headers: {id: "651708f64b8ed0536c299140"},
  timeout: 5000,
});
export default instance;

//https://openmarket.onrender.com/
