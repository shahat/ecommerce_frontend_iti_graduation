import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomeCategory({ image, name, categoryToSub, lng }) {
  const { t } = useTranslation();
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <Link className="text-decoration-none" to={`/shop/?category=${name}`}>
        <div
          className={` d-flex align-items-center mb-4  ${style.categoryCard} ${style.category_body}`}
        >
          <div
            className={`${style.category_image} overflow-hidden`}
            style={{
              width: 100,
              height: 100,
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className={`flex-fill pl-3 px-4 ${style.category_body}`}>
            <h6 className=" text-body">{name}</h6>
            <small className="text-body">
              {categoryToSub.length} {t("subCategory")}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomeCategory;
