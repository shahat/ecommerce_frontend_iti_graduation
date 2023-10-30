import React from "react";
// import style from "./Home.module.css";
import Caarousel from "../Carousel/Caarousel";
import NewArrival from "./NewArrival";
import Categoy from "../Shop/categoy";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Caarousel start  */}
      <Caarousel></Caarousel>
      {/* ================================== Start of Category ==================================  */}

      <div>
        <div className="container my-5 w-100 h-25">
          <span className=" w-25 h-100 "> </span>
          <h2 id="medo" className="text-center m-5 text-black-50 fw-bold ">
            Popular Category
          </h2>
        </div>
        <section className="container">
          <div className="row justify-content-center my-5">
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <Link to="/shop">
                <Categoy name="mobile" src="./assets/images/phone.jpg" />{" "}
              </Link>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="Beauty" src="./assets/images/prfiom.jpg" />
            </div>

            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="furniture" src="./assets/images/accessories.jpg" />
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="accessories" src="./assets/images/watches.jpg" />
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="laptop" src="./assets/images/labtop.jpeg" />{" "}
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <Categoy name="mobile" src="./assets/images/phone.jpg" />{" "}
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="Beauty" src="./assets/images/prfiom.jpg" />
            </div>

            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="furniture" src="./assets/images/accessories.jpg" />
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="accessories" src="./assets/images/watches.jpg" />
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              {" "}
              <Categoy name="laptop" src="./assets/images/labtop.jpeg" />{" "}
            </div>

            {/*  */}
          </div>
        </section>

        {/* 


Accessories
../../assets/images/products-images/watches.jpg
*/}

        {/* ================================== End Category ==================================  */}
        <NewArrival />
      </div>
    </>
  );
}
