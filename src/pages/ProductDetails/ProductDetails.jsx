import React from "react";
import css from "./product.module.css";
import PhotoGallery from "../../components/productDetailsComps/photoGallery";
import {
    FaFilter,
    FaStar,
    FaMinus,
    FaPlus,
    FaRegHeart,
    FaTruckFast,
    FaRepeat,
} from "react-icons/fa6";

function ProductDetails() {
    var toggelButtons = document.getElementsByClassName("toggel");
    var toggelPages = document.querySelectorAll("div[id*='tab-pane-']");

    for (var i = 0; i < toggelButtons.length; i++) {
        toggelButtons[i].addEventListener("click", switchPages);
        // Add a custom data attribute to store the index
        toggelButtons[i].setAttribute("button-index", i);
    }

    function switchPages(e) {
        var button = e.target;
        // Get the index from the data attribute
        var index = button.getAttribute("button-index");

        for (var i = 0; i < toggelButtons.length; i++) {
            toggelButtons[i].classList.remove("border-bottom-0", "border");
            toggelButtons[i].classList.add("border-bottom");
            toggelPages[i].classList.add("d-none");
        }
        button.classList.add("border-bottom-0", "border");
        button.classList.remove("border-bottom");
        toggelPages[index].classList.remove("d-none");
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
                    <PhotoGallery className="col-6 border rounded-4  shadow p-0" />
                    {/* <!-- DETAILS PART --> */}
                    <div className="product_details col-md-5 ps-5 align-content-between">
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
                                    className="btn-group"
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

                            <div className="wrapDiv mb-4 d-flex">
                                <div
                                    className="btn-group inc-dec w-50"
                                    role="group"
                                    aria-label="Basic outlined example"
                                >
                                    <button
                                        type="button"
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaMinus />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn w-50 border bg-white px-4"
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="nomargin d-flex">
                                    <button
                                        type="button"
                                        className={`${css.myBtn} buynow mx-2`}
                                    >
                                        Buy Now
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
                        <a
                            href="#tab-pane-1"
                            className="toggel btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            Product Details
                        </a>
                        <a
                            href="#tab-pane-2"
                            className="toggel btn pb-2 mb-4 text-danger rounded-bottom-0 border-bottom-0 col border"
                        >
                            Ratings & Reviews
                        </a>
                        <a
                            href="#tab-pane-3"
                            className="toggel btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            FAQs
                        </a>
                    </div>

                    <div className="container">
                        <div className="container col-12 justify-content-center">
                            <div id="tab-pane-1" className="d-none">
                                <div className="tab-headding pb-4">
                                    <h2 className="d-inline">
                                        Product Description
                                    </h2>
                                </div>
                                <div className="tab-body">
                                    <p>
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo dolores et duo
                                        sit. Vero diam ea vero et dolore rebum,
                                        dolor rebum eirmod consetetur invidunt
                                        sed sed et, lorem duo et eos elitr,
                                        sadipscing kasd ipsum rebum diam. Dolore
                                        diam stet rebum sed tempor kasd eirmod.
                                        Takimata kasd ipsum accusam sadipscing,
                                        eos dolores sit no ut diam consetetur
                                        duo justo est, sit sanctus diam tempor
                                        aliquyam eirmod nonumy rebum dolor
                                        accusam, ipsum kasd eos consetetur at
                                        sit rebum, diam kasd invidunt tempor
                                        lorem, ipsum lorem elitr sanctus eirmod
                                        takimata dolor ea invidunt.
                                    </p>
                                    <p>
                                        Dolore magna est eirmod sanctus dolor,
                                        amet diam et eirmod et ipsum. Amet
                                        dolore tempor consetetur sed lorem dolor
                                        sit lorem tempor. Gubergren amet amet
                                        labore sadipscing clita clita diam
                                        clita. Sea amet et sed ipsum lorem elitr
                                        et, amet et labore voluptua sit rebum.
                                        Ea erat sed et diam takimata sed justo.
                                        Magna takimata justo et amet magna et.
                                    </p>
                                </div>
                            </div>
                            <div id="tab-pane-2" className="">
                                <div className="tab-headding pb-4 d-flex justify-content-sm-between justify-content-center flex-sm-row flex-column">
                                    <h2 className="d-inline">
                                        Reviews
                                        <span
                                            id="review-count"
                                            className="fs-6 text-secondary"
                                        >
                                            (24)
                                        </span>
                                    </h2>
                                    <div className="d-flex">
                                        <button
                                            className={`btn ${css.myBtnDisabled} rounded-circle`}
                                        >
                                            <FaFilter />
                                        </button>
                                        <select
                                            className={`btn ${css.myBtnDisabled} border-1 rounded-pill mx-3`}
                                            aria-label="Default select example"
                                        >
                                            <option defaultValue>Latest</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button
                                            className={`btn ${css.myBtn} rounded-pill fs-6 px-3`}
                                        >
                                            Write a Review
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`${css["reviews-individuals"]} d-flex flex-md-row flex-column flex-wrap justify-content-center`}
                                >
                                    <div className="single-review border rounded-4 col-lg-5 col-12 p-3">
                                        <div className="review-h d-flex justify-content-between mb-3">
                                            <div className="text-secondary d-flex">
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar />
                                            </div>
                                            <div className="review-option">
                                                <button className="btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="reviewer">
                                            <h3 className="fw-bold">
                                                Alex M.
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                                                        fill="#01AB31"
                                                    />
                                                </svg>
                                            </h3>
                                        </div>
                                        <div className="review-comm fs-6">
                                            <p>
                                                &quot;The t-shirt exceeded my
                                                expectations! The colors are
                                                vibrant and the print quality is
                                                top-notch. Being a UI/UX
                                                designer myself, i&apos;m quite
                                                picky about aesthetics, and this
                                                t-shirt definitely gets a thumbs
                                                up from me.&quot;
                                            </p>
                                        </div>
                                        <div className="review-date fs-6 text-secondary">
                                            <p className="m-0">
                                                Posted on August 15, 2023
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-3" className="d-none">
                                <h2 className="mb-4">FAQs</h2>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Related Products PART --> */}

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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
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
                </div>
                {/* <!-- Carousel wrapper --> */}
            </div>
        </>
    );
}

export default ProductDetails;
