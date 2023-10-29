// import React from "react";
import css from "../../assets/style/product.module.css";
import RelatedProducts from "../../components/relatedProducts/relatedProducts"
import { FaTrash } from "react-icons/fa6";



function WishList() {
  return <>
     {/* <!-- ============================page body ======================================== --> */}
    <div className="d-flex row justify-content-center col-12 m-0">
      <h1 className="col-12 fw-bolder m-5 text-center">My Wish List</h1>
      {/* <!-- Wish PART --> */}
      <div
        className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}
      >
        {/* <!-- Wish-Products PART --> */}
        <div
          className={`${css.wish} col-12 border rounded-4 p-4 d-flex flex-column bg-white`}
        >
          <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
            <div className={`${css["cart_product_left"]} float-start d-flex col-md-6 col-12`}>
              <div
                className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1`}
                style={{width: "7.75rem", height: "7.75rem"}}
              >
                <img
                  src="src/assets/images/wish-list/shirt.png"
                  alt=""
                  className="h-100 m-auto"
                />
              </div>
              <div
                className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
              >
                <h4>Gradient Graphic T-shirt</h4>
                <p>Size: <span className="text-secondary">Large</span></p>
                <p>Color: <span className="text-secondary">Blue</span></p>
                <h3 className="mt-auto mb-0">143$</h3>
              </div>
            </div>
            <div
              className={`${css["wish_product_right"]} d-flex flex-column flex-lg-row align-items-center col-md-6 col-12`}
            >
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                  Add To Cart
                </button>
              </div>
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                <FaTrash className=" text-danger"/>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-4 w-100" />
          <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
            <div className={`${css["cart_product_left"]} float-start d-flex col-md-6 col-12`}>
              <div
                className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1`}
                style={{width: "7.75rem", height: "7.75rem"}}
              >
                <img
                  src="src/assets/images/wish-list/t-shirt.jpeg"
                  alt=""
                  className="h-100 m-auto"
                />
              </div>
              <div
                className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
              >
                <h4>Gradient Graphic T-shirt</h4>
                <p>Size: <span className="text-secondary">Large</span></p>
                <p>Color: <span className="text-secondary">Blue</span></p>
                <h3 className="mt-auto mb-0">143$</h3>
              </div>
            </div>
            <div
              className={`${css["wish_product_right"]} d-flex flex-column flex-lg-row align-items-center col-md-6 col-12`}
            >
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                  Add To Cart
                </button>
              </div>
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                <FaTrash className=" text-danger"/>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-4 w-100" />
          <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
            <div className={`${css["cart_product_left"]} float-start d-flex col-md-6 col-12`}>
              <div
                className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1`}
                style={{width: "7.75rem", height: "7.75rem"}}
              >
                <img
                  src="src/assets/images/wish-list/tra.jpeg"
                  alt=""
                  className="h-100 m-auto"
                />
              </div>
              <div
                className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
              >
                <h4>Gradient Graphic T-shirt</h4>
                <p>Size: <span className="text-secondary">Large</span></p>
                <p>Color: <span className="text-secondary">Blue</span></p>
                <h3 className="mt-auto mb-0">143$</h3>
              </div>
            </div>
            <div
              className={`${css["wish_product_right"]} d-flex flex-column flex-lg-row align-items-center col-md-6 col-12`}
            >
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                  Add To Cart
                </button>
              </div>
              <div className="">
                <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                  <FaTrash className=" text-danger"/>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ========================================================================= --> */}
        <div className={`${css.discount} d-flex col-12 mt-5 justify-content-center`}>
          <button
            className="border-0 rounded-pill col-md-3 col-8 mt-4 fs-5 bg-danger text-white"
          >
            Clear Wish List
          </button>
        </div>
      </div>

      {/* <!-- Related Products PART --> */}
      <RelatedProducts     />
    </div>
  </>;
}

export default WishList;
