import { useEffect, useState } from "react";
import css from "../../assets/style/product.module.css";
import PhotoGallery from "../../components/productDetailsComps/photoGallery";
import RelatedProducts from "../../components/relatedProducts/relatedProducts";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBothCartsAction } from "../../store/slices/cart";

import {
    FaStar,
    FaMinus,
    FaPlus,
    FaRegHeart,
    FaTruckFast,
    FaRepeat,
} from "react-icons/fa6";

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    
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
    function addToCart(id){
        dispatch(addToBothCartsAction(id));
    }

    return (
        <>
            <div
                className="d-flex col row justify-content-center col-12"
                style={{ top: "70px", position: "relative" }}
            >
                {/* <!-- PRODUCT PART --> */}
                <div
                    className="product row d-flex col-md-10 justify-content-between m-0 p-0"
                    style={{ top: "100px" }}
                >
                    {/* <!-- IMAGE PART --> */}
                    <PhotoGallery className="col-md-6 m-auto border rounded-4  shadow p-0" />
                    {/* <!-- DETAILS PART --> */}
                    <div
                        className={`${css["product_details"]} col-md-5 ps-5 align-content-between`}
                    >
                        <div className="fw-bold h5">
                            <p>Havic HV G-92 Gamepad</p>
                            <div
                                className="text-secondary h6"
                                style={{ fontSize: "small" }}
                            >
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar />

                                <span className="mx-2">(160 Review)</span>

                                <div className="vr mx-2"></div>

                                <a
                                    href="#"
                                    className="btn text-primary m-0 mx-2 p-0"
                                >
                                    in stock
                                </a>
                            </div>
                            <p className="fw-normal fs-4">$192.00</p>
                            <p className="fw-medium fs-6">
                                PlayStation 5 Controller Skin High quality vinyl
                                with air channel adhesive for easy bubble free
                                install & mess free removal Pressure sensitive.
                            </p>
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

                            <div className="mb-4">
                                <span className="me-3">Size: </span>
                                <div
                                    className={`${css["btn-group"]} btn-group`}
                                    role="group"
                                    aria-label="Basic radio toggle button group"
                                >
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        {/* <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        /> */}
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            S{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            M{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            L{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            XL{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            XXL{" "}
                                        </label>
                                    </div>
                                </div>
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
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaMinus />
                                    </button>
                                    <button
                                        type=""
                                        className="w-50 border bg-white px-4"
                                    >
                                        {quantity}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={inc}
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className={`${css.nomargin} d-flex`}>
                                    <button
                                        type="button"
                                        onClick={addToCart}
                                        className={`${css.myBtn} ${css.buynow} mx-2`}
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <!-- heart button --> */}
                                    <a
                                        type="button"
                                        className={`btn ${css.myBtnDisabled} clo-12`}
                                    >
                                        <FaRegHeart />
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
                                        Enter your postal code for Delivery
                                        Availability
                                    </a>
                                </div>
                            </div>
                            <div className="row col-12 border ms-1 py-3 px-1 align-items-center">
                                <div className="col-2 fs-4 px-1 mx-1 text-center">
                                    <FaRepeat />
                                </div>
                                <div className="col p-0">
                                    <h5>Return Delivery</h5>
                                    <p
                                        className="mb-1"
                                        style={{ fontSize: "x-small" }}
                                    >
                                        Enter your postal code for Delivery
                                        Availability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DETAILS PART --> */}
                <div
                    className={`${css.details} product row d-flex col-md-10 justify-content-center m-0 p-0`}
                >
                    <div className="row col-10">
                        <Link
                            to="product/description"
                            className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            Product Details
                        </Link>
                        <Link
                            to="product/reviews"
                            className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col border-bottom-0 border"
                        >
                            Ratings & Reviews
                        </Link>
                        <Link
                            to="product/faq"
                            className="toggle btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            FAQs
                        </Link>
                    </div>

                    <div className="container">
                        <div className="container col-12 justify-content-center">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
                {/* <!-- Related Products PART --> */}
                <RelatedProducts />

                {/* <NewRelatedProducts     /> */}
            </div>
        </>
    );
}

export default ProductDetails;

function NewRelatedProducts() {
    return (
        <div
            id="carouselMultiItemExample"
            className="carousel slide carousel-dark text-center mt-4 py-3 border rounded-3 col-10"
            data-mdb-ride="carousel"
        >
            {/* <!-- Controls --> */}
            <div className="d-flex justify-content-center mb-4">
                <button
                    className="carousel-control-prev position-relative"
                    type="button"
                    data-mdb-target="#carouselMultiItemExample"
                    data-mdb-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next position-relative"
                    type="button"
                    data-mdb-target="#carouselMultiItemExample"
                    data-mdb-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- Inner --> */}
            <div className="carousel-inner py-4">
                {/* <!-- Single item --> */}
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                        className="card-img-top"
                                        alt="Waterfall"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                        className="card-img-top"
                                        alt="Sunset Over the Sea"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                        className="card-img-top"
                                        alt="Sunset over the Sea"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                        className="card-img-top"
                                        alt="Fissure in Sandstone"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                        className="card-img-top"
                                        alt="Storm Clouds"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                        className="card-img-top"
                                        alt="Hot Air Balloons"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                        className="card-img-top"
                                        alt="Peaks Against the Starry Sky"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                        className="card-img-top"
                                        alt="Bridge Over Water"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                <div className="card">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                        className="card-img-top"
                                        alt="Purbeck Heritage Coast"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <a
                                            href="#!"
                                            className="btn btn-primary"
                                        >
                                            Button
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Inner --> */}
            {/* <!-- Carousel wrapper --> */}
        </div>
    );
}
