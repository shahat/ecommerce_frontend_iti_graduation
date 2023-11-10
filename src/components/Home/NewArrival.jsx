import React from "react";
import { Link } from "react-router-dom";
import newArrival from "./NewArrival.module.css";

function NewArrival(props) {
  // console.log("the props from new arrival ", props);
  return (
    <>
      <div className="container-fluid   mb-3">
        <h2 className=" position-relative text-uppercase mx-xl-5 mb-4">
          <span className="pr-3">lates Clothes collection </span>
        </h2>
        <div className="row g-3 px-xl-5">
          <div className="col-lg-7">
            <div
              className={`position-relative w-100 ${newArrival.subCategoryWide} overflow-hidden  `}
            >
              <div
                className={`offer-text position-absolute top-0 w-100 h-100 
 d-flex flex-column align-items-center justify-content-center 
  text-center ${newArrival.subCategory_content} `}
              >
                <h6 className="text-white text-uppercase">
                  SubCategory_Name Fashon{" "}
                </h6>
                <h3 className="text-white mb-3">
                  Latest collection in the stock{" "}
                </h3>
                <a
                  href
                  className={`btn btn-primary ${newArrival.custom_button}`}
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div
              className={`position-relative w-100 ${newArrival.subCategoryNarrow} ${newArrival.first}`}
            >
              <div
                className={`offer-text position-absolute top-0 w-100 h-100 
 d-flex flex-column align-items-center justify-content-center 
  text-center ${newArrival.subCategory_content} `}
              >
                <h6 className="text-white text-uppercase">
                  SubCategory_Name Fashon{" "}
                </h6>
                <h3 className="text-white mb-3">
                  Latest collection in the stock{" "}
                </h3>
                <a
                  href
                  className={`btn btn-primary ${newArrival.custom_button}`}
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div
              className={`  position-relative w-100 ${newArrival.subCategoryNarrow} ${newArrival.second} `}
            >
              <div
                className={`offer-text position-absolute top-0 w-100 h-100 
                 d-flex flex-column align-items-center justify-content-center 
                  text-center ${newArrival.subCategory_content} `}
              >
                <div>
                  <h6 className="text-white text-uppercase  ">
                    SubCategory_Name Fashon{" "}
                  </h6>
                  <h3 className="text-white mb-3">
                    Latest collection in the stock{" "}
                  </h3>
                  <Link
                    to={`/shop`}
                    className={`btn btn-primary ${newArrival.custom_button}`}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default NewArrival;
