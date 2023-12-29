import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// passes i18n down to react-i18next

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en", // lng: document.querySelector("html").lang,
    detection: {
      // the following line i define where i can
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "../public/assets/locals/{{lng}}/translation.json",
    },
    react: {},
  });

import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorHandling/ErrorHandlingPage.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
