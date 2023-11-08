import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: { id: "654a08dfd94740d99546a88a" },
  timeout: 5000,
});
export default instance;

//https://openmarket.onrender.com/
