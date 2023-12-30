import React from "react";
import img1 from "../../../public/assets/images/carsoule/car-1.jpg";
import img2 from "../../../public/assets/images/carsoule/car-2.jpg";
import img3 from "../../../public/assets/images/carsoule/car-3.jpg";
import styles from "./Carousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function Caarousel() {
  const car_images = [img1, img2, img3];
  return (
    <>
      <div className={`over-flow-hidden ${styles.cars_container}`}>
        <Carousel indicators={false}>
          {car_images.map((item, index) => (
            <Carousel.Item key={index} className="postion-relative">
              <div
                className={`postion-relative ${styles.image_container}`}
                style={{ backgroundImage: `url(${item})` }}
              >
                <div
                  className="overLayer overflow-hidden position-absolute top-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center
                "
                >
                  <div
                    className={` mx-5 my-sm-5 d-flex p justify-content-center   h-100 w-100 ms-4 ${styles.car_content}`}
                    style={{ padding: "0 130px" }}
                  >
                    <h1
                      className={`text-white fs-2 fw-bold text-capitalize fs-md-6 ${styles.car_heading}`}
                    >
                      NEW COLLECTIONS
                    </h1>
                    <p className={`${styles.car_parag} fs-sm-6`}>
                      We know how large objects will act, but things on a small
                      scale.
                    </p>
                    <Link to="/shop">
                      <button className={` px-3 py-2 ${styles.custom_button}`}>
                        Shop Now
                      </button>{" "}
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Caarousel;
