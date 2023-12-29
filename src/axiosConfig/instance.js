import axios from "axios";
import cookie from "js-cookie";
const currentLanguageCode = cookie.get("i18next") || "en";
// console.log("Current Language Code:", currentLanguageCode);

const instance = axios.create({
  baseURL: "https://openmarket.onrender.com/",
  // headers: { lng: currentLanguageCode },
  params: { lng: currentLanguageCode },
});
export default instance;

//https://openmarket.onrender.com/
