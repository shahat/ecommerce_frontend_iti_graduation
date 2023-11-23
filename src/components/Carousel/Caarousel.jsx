import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

function Caarousel() {
  return (
    <>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="row">
          <div className="col-md-12 container">
            <div className="carousel-inner carousel-hero">
              <div className="carousel-item active  " id="first-Carousel-Image">
                <div className="overLay">
                  <div className="carousel-caption position-absolute top-0 d-flex flex-column  justify-content-center align-items-center w-25 ">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item " id="second-Carousel-Image">
                <div className="carousel-caption position-absolute  top-0 d-flex flex-column justify-content-center align-items-center w-25 ">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item  " id="third-Carousel-Image">
                <div className="carousel-caption position-absolute top-0  d-flex flex-column  justify-content-center align-items-center w-25 ">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <Carousel data-bs-theme="dark">
        <Carousel.Item className="postion-relative">
          <img
            className="d-block w-100"
            src="../../../public/assets/images/man-3.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className="postion-absolute carousel_caption ">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="custom_button">shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="postion-relative">
          <img
            className="d-block w-100"
            src="../../../public/assets/images/man-3.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className="postion-absolute carousel_caption ">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="custom_button">shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="postion-relative">
          <img
            className="d-block w-100"
            src="../../../public/assets/images/man-3.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className="postion-absolute carousel_caption ">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="custom_button">shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Caarousel;
