// import React from "react";
import Card from "./card";
import style from "./shop.module.css";
import "./chechbox.css";
import Caarousel from "../Carousel/Caarousel";
import { useDispatch, useSelector } from "react-redux";
// import { productAction } from "../../store/slices/products";
import { subCategoryAction } from "../../store/slices/subcategory";
import SubCategoy from "./subcategory";
import axios from "axios";
import Pricefilter from "./pricefilter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../../axiosConfig/instance";
import Colorfilter from "./colorfilter";

function Shop() {
  var dispatch = useDispatch();
  var [products, setproducts] = useState([]);
  var SubCategoies = useSelector((state) => state.subCategories.subCategories);
  var [currentPage, setCurrentPage] = useState(1);
  var [currentPage2, setCurrentPage2] = useState(1);
  ////////////////////////////////////////////////////////////////
  async function getSubCategoryProducts(subCategoryName) {
    var id = subCategoryName;
    try {
      const data = await axios.get(`http://localhost:5000/subcategories/${id}`);
      const res = data.data.data;
      setproducts(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function getProducts(currentPage) {
    try {
      const data = await axios.get(
        `http://localhost:5000/product?page=${currentPage}`
      );
      const res = data.data.data;
      setproducts(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // dispatch(productAction(currentPage));
    dispatch(subCategoryAction(currentPage2));
  }, [currentPage2]);

  //=============================
  //////////////////////////////////////////////////////////////////

  const { productName } = useParams();

  // const [searchedProducts, setSearchedProducts] = useState([]);
  var [isVisible, setIsVisible] = useState(false);
  var toggelFilter = () => {
    setIsVisible(!isVisible);
  };

  const getsearchedProduct = async () => {
    try {
      const res = await instance.get(`/product?keyword=${productName}`);
      const result = res.data.data;
      setproducts(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (productName) {
      console.log("fffffffffffffffffffffffffffff");
      getsearchedProduct();
    } else {
      getProducts(currentPage);
    }
    // console.log("Updated searchedProducts data:", searchedProducts);
  }, [currentPage]);

  useEffect(() => {
    // console.log("Updated searchedProducts data:", searchedProducts);
  }, [products]); // This effect will run when searchedProducts changes.
  return (
    <div className={style.componentcontainer}>
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
                      <Pricefilter
                        setproducts={setproducts}
                        currentPage={currentPage}
                      />
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
                      <Colorfilter
                        setproducts={setproducts}
                        currentPage={currentPage}
                      />
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
                      Filter By prand
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="filterSize"
                  >
                    <div className="accordion-body"></div>
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
      <div className="container">
        <Caarousel></Caarousel>
      </div>
      {/* category &filter &product container */}
      <div className="col-md-10 container">
        {/*subCategory */}
        <div className=" d-flex justify-content-center align-items-center flex-wrap">
          <div
            onClick={() => getProducts(currentPage)}
            className={style.subcategorydiv}
          >
            <SubCategoy
              name="All subcategory"
              img="./assets/images/products-images/images.jpeg"
            />
          </div>
          {SubCategoies &&
            SubCategoies.map((supcategory) => (
              <div
                className={`me-4 ms-4 ${style.subcategorydiv}`}
                key={supcategory._id}
                onClick={() => getSubCategoryProducts(supcategory.name)}
              >
                <SubCategoy name={supcategory.name} img={supcategory.image} />
              </div>
            ))}
        </div>
        <nav aria-label="Page navigation example" className="mt-5">
          <ul className="pagination justify-content-center">
            <li
              className="page-item disabled"
              onClick={() => setCurrentPage2(currentPage2 - 1)}
            >
              <a className="page-link" tabIndex={-1} aria-disabled="true">
                Previous
              </a>
            </li>
            <li className={`page-item ${currentPage2 > 2 ? "disabled" : ""}`}>
              <a
                className={`page-link ${style.paginationitems}`}
                onClick={() => setCurrentPage2(currentPage2 + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
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
            <Pricefilter setproducts={setproducts} currentPage={currentPage} />
            <Colorfilter setproducts={setproducts} currentPage={currentPage} />
          </div>
          {/* Shop Sidebar End */}
          {/* product card */}
          <div className="product-card col-lg-8 col-md-10  mt-4 m-auto">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 row-cols-sm-2">
              {products &&
                products.map((product) => (
                  <Card
                    key={product._id}
                    id={product._id}
                    title={product.title}
                    price={product.price}
                    priceAfterDiscount={product.priceAfterDescount}
                    img={product.thumbnail}
                  />
                ))}
            </div>
          </div>
        </div>
        {/* pagination */}
        <nav aria-label="Page navigation example" className="mt-5">
          <ul className="pagination justify-content-center">
            <li
              className="page-item disabled"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <a className="page-link" tabIndex={-1} aria-disabled="true">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${style.paginationitems}`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${style.paginationitems}`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className={`page-link ${style.paginationitems}`}
                onClick={() => setCurrentPage(3)}
              >
                3
              </a>
            </li>
            <li className={`page-item ${currentPage > 2 ? "disabled" : ""}`}>
              <a
                className={`page-link ${style.paginationitems}`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Shop;
