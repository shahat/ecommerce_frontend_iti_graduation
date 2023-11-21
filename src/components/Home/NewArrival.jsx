import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import newArrival from "./NewArrival.module.css";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
function NewArrival({ electronics, clothes, title }) {
  const lng = cookie.get("i18next") || "en";

  const data = clothes && clothes ? clothes : electronics;
  // console.log("electronics clothes", clothes, electronics);
  useEffect(() => {}, [data, lng]);
  const { t } = useTranslation();

  return (
    <>
      {data && data.length > 0 && (
        <div className="container-fluid ">
          <h2 className=" position-relative text-uppercase mx-xl-5 mb-4">
            <span className="pr-3">{title}</span>
          </h2>
          <div className="row g-3 px-xl-5">
            <div className="col-lg-7">
              <div
                className={`position-relative w-100 ${newArrival.subCategoryWide} overflow-hidden  `}
                style={{ backgroundImage: `url(${data[1].image})` }}
              >
                <div
                  className={`offer-text position-absolute top-0 w-100 h-100 
 d-flex flex-column align-items-center justify-content-center 
  text-center ${newArrival.subCategory_content} `}
                >
                  <h6 className="text-white fs-2 text-uppercase">
                    {" "}
                    {lng === "en" ? data[1].name : data[1].name_ar}
                  </h6>
                  <h3 className="text-white mb-3">
                    {t("Latest_collection_in_market")}
                  </h3>
                  <Link
                    to={`/shop/?subcategory=${
                      lng === "en" ? data[1].name : data[1].name_ar
                    }`}
                    className={`btn btn-primary ${newArrival.custom_button}`}
                  >
                    {t("shop_now")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div
                className={`position-relative w-100 ${newArrival.subCategoryNarrow} ${newArrival.first}`}
                style={{ backgroundImage: `url(${data[2].image})` }}
              >
                <div
                  className={`offer-text position-absolute top-0 w-100 h-100 
 d-flex flex-column align-items-center justify-content-center 
  text-center ${newArrival.subCategory_content} `}
                >
                  <h6 className="text-white fs-2 text-uppercase">
                    {" "}
                    {lng === "en" ? data[2].name : data[2].name_ar}
                  </h6>
                  <h3 className="text-white mb-3">
                    {t("Latest_collection_in_market")}
                  </h3>
                  <Link
                    to={`/shop/?subcategory=${
                      lng === "en" ? data[2].name : data[2].name_ar
                    }`}
                    className={`btn btn-primary ${newArrival.custom_button}`}
                  >
                    {t("shop_now")}
                  </Link>
                </div>
              </div>
              <div
                className={`  position-relative w-100 ${newArrival.subCategoryNarrow} ${newArrival.second} `}
                style={{ backgroundImage: `url(${data[0].image})` }}
              >
                <div
                  className={`offer-text position-absolute top-0 w-100 h-100 
                 d-flex flex-column align-items-center justify-content-center 
                  text-center ${newArrival.subCategory_content} `}
                >
                  <div>
                    <h6 className="text-white fs-2 text-uppercase">
                      {" "}
                      {lng === "en" ? data[0].name : data[0].name_ar}
                    </h6>
                    <h3 className="text-white mb-3">
                      {t("Latest_collection_in_market")}
                    </h3>
                    <Link
                      to={`/shop/?subcategory=${
                        lng === "en" ? data[0].name : data[0].name_ar
                      }`}
                      className={`btn btn-primary ${newArrival.custom_button}`}
                    >
                      {t("shop_now")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewArrival;
