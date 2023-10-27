import React from "react";
import style from "./Home.module.css";
import Caarousel from "../Carousel/Caarousel";
import NewArrival from "./NewArrival";
export default function Home() {
  return (
    <>
      {/* Caarousel start  */}
      <Caarousel></Caarousel>
      {/* ================================== Start of Category ==================================  */}

      <div>
        <div className="container my-5 w-100 h-25">
          <span className=" w-25 h-100 bg-danger"> </span>
          <h2 id="medo">Popular Category</h2>
        </div>
        <section className="container">
          <div className="row justify-content-center my-5">
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-4`}
                src="../../assets/images/products-images/phone.jpg"
                alt="Mobile"
              />
              <div className="mt-2 fs-5 fw-bold">Mobile</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/prfiom.jpg"
                alt="Beauty"
              />
              <div className="mt-2 fs-5 fw-bold">Beauty</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/accessories.jpg"
                alt="Furniture"
              />
              <div className="mt-2 fs-5 fw-bold">Furniture</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2 border-5   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/watches.jpg"
                alt="Accessories"
              />
              <div className="mt-2 fs-5 fw-bold">Accessories</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/labtop.jpeg"
                alt="Laptop"
              />
              <div className="mt-2 fs-5 fw-bold">Laptop</div>
            </div>
            {/*  */}
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/prfiom.jpg"
                alt="Beauty"
              />
              <div className="mt-2 fs-5 fw-bold">Beauty</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/labtop.jpeg"
                alt="Laptop"
              />
              <div className="mt-2 fs-5 fw-bold">Laptop</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/accessories.jpg"
                alt="Furniture"
              />
              <div className="mt-2 fs-5 fw-bold">Furniture</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-4`}
                src="../../assets/images/products-images/phone.jpg"
                alt="Mobile"
              />
              <div className="mt-2 fs-5 fw-bold">Mobile</div>
            </div>
            <div className="col-sx-2 col-sm-4 col-md-4 col-lg-2 mx-lg-1 my-2   d-flex flex-column justify-content-center align-items-center">
              <img
                className={`${style.category_image} rounded-circle border border-5`}
                src="../../assets/images/products-images/watches.jpg"
                alt="Accessories"
              />
              <div className="mt-2 fs-5 fw-bold">Accessories</div>
            </div>
          </div>
        </section>
        {/* ================================== End Category ==================================  */}
        <NewArrival />
      </div>
    </>
  );
}
