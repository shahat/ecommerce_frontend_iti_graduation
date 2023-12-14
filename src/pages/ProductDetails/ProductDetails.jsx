import { useEffect, useState } from "react";
import css from "../../assets/style/product.module.css";
import PhotoGallery from "../../components/productDetailsComps/photoGallery";
import { Link, Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBothCartsAction } from "../../store/slices/cart";
import { addToWishListAction } from "../../store/slices/wishList";
import starRating from "../../utils/starRating";
import {
  FaStar,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaTruckFast,
  FaRepeat,
} from "react-icons/fa6";
import instance from "../../axiosConfig/instance";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance(`product/${id}`);
        console.log("response.data.data", response.data.data);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    var toggleButtons = document.getElementsByClassName("toggle");
    for (var i = 0; i < toggleButtons.length; i++) {
      toggleButtons[i].addEventListener("click", switchPages);
    }

    function switchPages(e) {
      var button = e.target;
      for (var i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].classList.remove("border-bottom-0", "border");
      }
      button.classList.add("border-bottom-0", "border");
    }
  }, []);

  function inc() {
    setQuantity(quantity + 1);
  }

  function dec() {
    quantity > 1 && setQuantity(quantity - 1);
  }

  function addToCart(id, quantity) {
    dispatch(addToBothCartsAction(id, quantity));
  }

  function addToWishlist(id) {
    dispatch(addToWishListAction(id));
  }

  const stars = product ? starRating(product.rating) : [];
  const prdDescription = product ? product.description : "";
  console.log("product.description from parent ", product.description);

  return (
    <>
      <div
        className="d-flex col row justify-content-center col-12  my-5"
        style={{ position: "relative" }}
      >
        {/* <!-- PRODUCT PART --> */}
        <div
          className="product row d-flex col-md-10 justify-content-between  "
          style={{ top: "100px" }}
        >
          {/* <!-- IMAGE PART --> */}
          <div className="col-md-6 overflow-hidden ">
            <PhotoGallery
              product={product}
              className=" border rounded shadow "
            />
          </div>
          {/* <!-- DETAILS PART --> */}
          <div
            className={`${css["product_details"]} col-md-5 ps-5 align-content-between`}
          >
            <div className="fw-bold h5">
              <p>{product.title}</p>
              <div className="text-secondary h6" style={{ fontSize: "small" }}>
                {stars.map((star, index) =>
                  star === 1 ? (
                    <FaStar key={index} className="text-warning" />
                  ) : (
                    <FaStar key={index} className="" />
                  )
                )}
                <span className="mx-2">(160 Review)</span>
                <div className="vr mx-2"></div>
                <a href="#" className="btn text-primary m-0 mx-2 p-0">
                  in stock
                </a>
              </div>
              <p className="fw-normal fs-4">${product.price}</p>
              <p className="fw-medium fs-6">{product.description}</p>
            </div>
            <hr className="w-100" />

            <div className="">
              <div className="mb-4">
                <span className="me-3">Colours: </span>
                <label htmlFor="color">
                  <input
                    className="form-check-input me-2 fs-5"
                    style={{ backgroundColor: "red" }}
                    type="radio"
                    name="color"
                    id="color1"
                    value="red"
                  />
                </label>
                <label htmlFor="color" className="me-3">
                  <input
                    className="form-check-input me-2 fs-5"
                    style={{ backgroundColor: "black" }}
                    type="radio"
                    name="color"
                    id="color1"
                    value="black"
                  />
                </label>
              </div>

              <div className={`${css.wrapDiv} mb-4 d-flex`}>
                <div
                  className={`${css["btn-group"]} btn-group ${css["inc-dec"]} w-50`}
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    onClick={dec}
                    className={`btn ${css.myBtn} bg-warning text-dark`}
                  >
                    <FaMinus />
                  </button>
                  <button type="" className="w-50 border bg-white px-4 ">
                    {quantity}
                  </button>
                  <button
                    type="button"
                    onClick={inc}
                    className={`btn ${css.myBtn} bg-warning text-dark`}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className={`${css.nomargin} d-flex dg-warning`}>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product._id, quantity);
                    }}
                    className={`${css.myBtn} ${css.buynow} mx-2 bg-warning text-dark `}
                  >
                    Add To Cart
                  </button>
                  {/* <!-- heart button --> */}
                  <a
                    type="button"
                    onClick={() => addToWishlist(product._id)}
                    className={`btn ${css.myBtnDisabled} clo-12`}
                  >
                    <FaRegHeart className="text-warning" />
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- two reqtangulars shipping & return --> */}
            <div className="d-flex flex-column rec">
              <div className="row col-12 border ms-1 py-3 px-1 align-items-center">
                <div className="col-2 fs-4 px-1 mx-1 text-center">
                  <FaTruckFast />
                </div>
                <div className="col p-0">
                  <h5>Free Delivery</h5>
                  <a
                    href="#"
                    className="text-dark m-0"
                    style={{ fontSize: "x-small" }}
                  >
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <div className="row col-12 border ms-1 py-3 px-1 align-items-center">
                <div className="col-2 fs-4 px-1 mx-1 text-center">
                  <FaRepeat />
                </div>
                <div className="col p-0">
                  <h5>Return Delivery</h5>
                  <p className="mb-1" style={{ fontSize: "x-small" }}>
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- DETAILS PART --> */}
        <div
          className={`${css.details}  py-5  product row d-flex col-md-10 justify-content-center `}
        >
          <div className="row col-10">
            <Link
              to="description"
              className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
            >
              Product Details
            </Link>
            <Link
              to="reviews"
              className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col border-bottom-0 border"
            >
              Ratings & Reviews
            </Link>
            <Link
              to="faq"
              className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
            >
              FAQs
            </Link>
          </div>

          <div className="container">
            <div className="container  col-12 justify-content-center">
              {product && <Outlet id={id} context={[prdDescription]} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
