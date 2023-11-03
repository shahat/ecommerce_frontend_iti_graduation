import React from "react";
import Card from "./card";
import Categoy from "./categoy";
import style from "./shop.module.css";
import "./chechbox.css";
import Caarousel from "../Carousel/Caarousel";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../../axiosConfig/instance";

function Shop() {
  const { productName } = useParams();
  const [searchedProducts, setSearchedProducts] = useState([]);
  var [isVisible, setIsVisible] = useState(false);
  var toggelFilter = () => {
    setIsVisible(!isVisible);
  };

  const getsearchedProduct = async () => {
    try {
      const res = await instance.get(`/product?keyword=${productName}`);
      const result = res.data.data;
      setSearchedProducts(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getsearchedProduct();
    console.log("Updated searchedProducts data:", searchedProducts);
  }, []);

  useEffect(() => {
    console.log("Updated searchedProducts data:", searchedProducts);
  }, [searchedProducts]); // This effect will run when searchedProducts changes.

  return (
    <div className={style.componentcontainer}>
      <div className="container">
        <Caarousel></Caarousel>
      </div>
      {/* filter layaout  */}
      {isVisible && (
        <div className={style.filterstyle}>
          <div className="filter-div2 m-auto rounded-4 w-75 mt-5">
            <div className="filter2 w-100 d-flex flex-column justify-content-center align-items-center  col-md-10">
              <div className="w-100 d-flex justify-content-end">
                <button
                  onClick={toggelFilter}
                  id="x-but"
                  type="button"
                  className={`btn btn-primary p-4 ${style.filterbut}`}
                >
                  x
                </button>
              </div>
              <h1 className={`filter-header mb-4 ${style.filterheader}`}>
                Apply Filter
              </h1>
              <div
                className="accordion w-75"
                id="accordionPanelsStayOpenExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="filterPrice">
                    <button
                      className="accordion-button bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Filter By Price
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="filterPrice"
                  >
                    <div className="accordion-body">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked
                            id="price-all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-all"
                          >
                            All Price
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-1"
                          >
                            $0 - $100
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-2"
                          >
                            $100 - $200
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-3"
                          >
                            $200 - $300
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-4"
                          >
                            $300 - $400
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-5"
                          >
                            $400 - $500
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="filterColor">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Filter By Color
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="filterColor"
                  >
                    <div className="accordion-body">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked
                            id="color-all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-all"
                          >
                            All Color
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="color-1"
                          >
                            Black
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="color-2"
                          >
                            White
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="color-3"
                          >
                            Red
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="color-4"
                          >
                            Blue
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="color-5"
                          >
                            Green
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="filterSize">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Filter By Size
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="filterSize"
                  >
                    <div className="accordion-body">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked
                            id="size-all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-all"
                          >
                            All Size
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-1"
                          >
                            XS
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-2"
                          >
                            S
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-3"
                          >
                            M
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-4"
                          >
                            L
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-5"
                          >
                            XL
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={toggelFilter}
                id="close-but"
                type="button"
                className={`btn btn-primary btn-lg my-4 ${style.filterbut}`}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
      {/* category &filter &product container */}
      <div className="col-md-10 container">
        {/* category */}
        <div className=" d-flex justify-content-center align-items-center flex-wrap">
          <Categoy name="mobile" src="./assets/images/phone.jpg" />
          <Categoy name="Beauty" src="./assets/images/prfiom.jpg" />
          <Categoy name="furniture" src="./assets/images/accessories.jpg" />
          <Categoy name="accessories" src="./assets/images/watches.jpg" />
          <Categoy name="laptop" src="./assets/images/labtop.jpeg" />
        </div>
        {/* filter */}
        <div className="row px-xl-5 mt-4">
          <div className={style.hidenbtn}>
            <div className="filter-but-div d-flex justify-content-end ">
              <button
                onClick={toggelFilter}
                id="filter-but"
                type="button"
                className={`btn btn-primary btn-lg mb-2 col-md-4 col-sm-6 col-4 mx-1 my-2 ${style.filterbut}`}
              >
                filter
              </button>
            </div>
          </div>
          <div
            className={`filter col-lg-2 mt-4 border-end ${style.hidenfilter}`}
          >
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4 fs-6 fs-6">
                Filter by price
              </h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="price-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Price
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label className="custom-control-label" htmlFor="price-1">
                    $0 - $100
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-2">
                    $100 - $200
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label className="custom-control-label" htmlFor="price-3">
                    $200 - $300
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label className="custom-control-label" htmlFor="price-4">
                    $300 - $400
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label className="custom-control-label" htmlFor="price-5">
                    $400 - $500
                  </label>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4 fs-6">
                Filter by color
              </h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="color-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Color
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-1"
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-2"
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-3"
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-4"
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <div className="mb-5">
              <h5 className="font-weight-semi-bold mb-4 fs-6">
                Filter by size
              </h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="size-all"
                  />
                  <label className="custom-control-label" htmlFor="size-all">
                    All Size
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-2"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-3"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-4"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-5"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                </div>
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* product card */}
          <div className="product-card col-lg-8 col-md-10  mt-4 m-auto">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 row-cols-sm-2">
              {searchedProducts.map((product, index) => (
                <Card
                  key={index}
                  title={product.title}
                  img={product.images[0]}
                  price={product.price}
                  afterDiscout={product.priceAfterDescount}
                />
              ))}
            </div>
          </div>
        </div>
        {/* pagination */}
        <nav aria-label="Page navigation example" className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className={`page-link ${style.paginationitems}`} href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className={`page-link ${style.paginationitems}`} href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className={`page-link ${style.paginationitems}`} href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className={`page-link ${style.paginationitems}`} href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      ;
    </div>
  );
}

export default Shop;
