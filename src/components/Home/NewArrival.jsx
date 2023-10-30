import React from "react";
import newArrival from "./NewArrival.module.css";

function NewArrival() {
  return (
    <>
      <div className="container  my-5 ">
        {/* <div className="MainHeader d-inline-block bg-primary  py-2 px-1"></div> */}
        <h2 className=" text-center m-5 text-black-50 fw-bold ">
          Latest Furniture Designs
        </h2>

        {/* Latest Furniture Designs */}

        <div className={`row p-0 m-0 mt-3 ${newArrival.newArrival}  `}>
          {/* left side image col1 */}
          <div
            className={`col-12 col-sm-12 col-md-4 col-lg-4 position-relative ${newArrival.leftSide}`}
          >
            <img
              src="../../assets/images/newarrival/firstFurnitureImage.jpg"
              style={{ borderTopLeftRadius: "80px 80px" }}
              alt
            />
            <div className="position-absolute top-0 p-4 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          {/* right side images col2 */}
          <div
            className={`col-12 col-sm-12 col-md-8 col-lg-8 p-0 m-0  over-flow-hidden ${newArrival.rightSide}`}
          >
            {" "}
            <div
              className="row p-0 m-0 justify-content-center align-items-center "
              style={{ height: "80vh" }}
            >
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.topRow}`}
              >
                <img
                  src="../../assets/images/newarrival/firstFurnitureImage.jpg"
                  alt="..."
                />
                <div className="position-absolute top-0 p-2 text-white text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.topRow}`}
              >
                <img
                  src="../../assets/images/newarrival/bedroom.jpg"
                  style={{ borderTopRightRadius: "80px 80px" }}
                  alt="..."
                />
                <div className="position-absolute top-0 p-2 text-white text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.bottomRow}`}
              >
                <img
                  src="../../assets/images/newarrival/firstBottomImage.jpg"
                  alt="..."
                />
                <div className="position-absolute top-0 p-2 text-white text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.bottomRow}`}
              >
                <img
                  src="../../assets/images/newarrival/37020d5a-b9b4-40e6-b022-84c47b1cd7a3.jpg"
                  style={{ borderBottomRightRadius: "80px 80px" }}
                  alt="..."
                />
                <div className="position-absolute top-0 p-2 text-white text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------  second arrival   ------------*/}
        <div
          className={`${newArrival.secondArrival}  p-0 m-0 mt-3  ${newArrival.newArrival2}`}
        >
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="./../../assets/images/newarrival/firstFurnitureImage.jpg"
              alt
            />
            <div className="position-absolute top-0 p-4 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival/firstFurnitureImage.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-2 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival/firstBottomImage.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-2 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival/bedroom.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-2 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>

      {/*------------  Latest Clothes Designs ------------  */}
      <div className="container my-5">
        <div className="MainHeader d-inline-block   py-2 px-1"></div>
        <span className="h5">Latest Clothes Designs</span>
        <div className={`row p-0 m-0 mt-3 ${newArrival.newArrival_second}`}>
          <div
            className={`col-12 col-sm-12 col-md-4 col-lg-4 position-relative ${newArrival.leftSide}`}
          >
            <img
              src="../../assets/images/newarrival-images/long-image.jpg"
              style={{ borderTopLeftRadius: "80px 80px" }}
              alt
            />
            <div className="position-absolute top-0 p-4 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div
            className={`col-12 col-sm-12 col-md-8 col-lg-8 p-0 m-0 ${newArrival.rightSide}`}
          >
            <div
              className="row p-0 m-0 justify-content-center align-items-center"
              style={{ height: "80vh" }}
            >
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.topRow}`}
              >
                <img
                  src="../../assets/images/newarrival-images/pexels-dom-j-45982.jpg"
                  alt="..."
                />
                <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.topRow}`}
              >
                <img
                  src="../../assets/images/newarrival-images/wide-image-3.jpg"
                  style={{ borderTopRightRadius: "80px 80px" }}
                  alt="..."
                />
                <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.bottomRow}`}
              >
                <img
                  src="../../assets/images/newarrival-images/boy-image.jpg"
                  alt="..."
                />
                <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
              <div
                className={`col-12 col-sm-12 col-md-6 col-lg-6 position-relative ${newArrival.bottomRow}`}
              >
                <img
                  src="../../assets/images/newarrival-images/pexels-andrea-piacquadio-3755706.jpg"
                  style={{ borderBottomRightRadius: "80px 80px" }}
                  alt="..."
                />
                <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
                  <p>5 items</p>
                  <h4>Furniture</h4>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`secondArrival  p-0 m-0 mt-3 ${newArrival.newArrival2_second}`}
        >
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival-images/long-image.jpg"
              alt
            />
            <div className="position-absolute top-0 p-4 text-white text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival-images/pexels-dom-j-45982.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival-images/wide-image-3.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className={`${newArrival.sa_element} position-relative`}>
            <img
              className={newArrival.secondArrival_img}
              src="../../assets/images/newarrival-images/pexels-andrea-piacquadio-3755706.jpg"
              alt="..."
            />
            <div className="position-absolute top-0 p-4 text-white fs-4 fw-bold text-warning text-bold">
              <p>5 items</p>
              <h4>Furniture</h4>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
