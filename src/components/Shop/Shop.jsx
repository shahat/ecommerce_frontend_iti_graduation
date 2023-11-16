// import React from "react";
import Card from "./card";
import style from "./shop.module.css";
import "./chechbox.css";
import Caarousel from "../Carousel/Caarousel";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../../axiosConfig/instance";
// import { useDispatch, useSelector } from "react-redux";
// import { productAction } from "../../store/slices/products";
// import { subCategoryAction } from "../../store/slices/subcategory";
import SubCategoy from "./subcategory";
import axios from "axios";
import Pricefilter from "./pricefilter";
import Colorfilter from "./colorfilter";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
//======================================================================================================================
function Shop() {
  //==============< hndle url query >===================================================================================
  const [searchParams] = useSearchParams();
  let searchParam = searchParams.get("search");
  let categoryParam = searchParams.get("category");
  let subcategoryParam = searchParams.get("subcategory");

  console.log(
    "FROM SHOP : searchParam,categoryParam ,subcategoryParam ",
    searchParam,
    categoryParam,
    subcategoryParam
  );
  //===============< states >============================================================================================
  var [isVisible, setIsVisible] = useState(false);
  var toggelFilter = () => {
    setIsVisible(!isVisible);
  };
  var [isVisible2, setIsVisible2] = useState(true);
  var [products, setproducts] = useState([]);
  var SubCategoies = useSelector((state) => state.subCategories.subCategories);
  var wishList = useSelector((state) => state.wishList.list);
  var [currentPage, setCurrentPage] = useState(1);
  var [currentPage2, setCurrentPage2] = useState(1);
  var [SubCategoies, setSubCategoies] = useState([]);

  //=============< get subcategory product function from url or when click on any subcategory >==========================
  async function getSubCategoryProducts(subcategoryParam) {
    var id = subcategoryParam;
    try {
      const data = await instance.get(`/subcategories/${id}`);
      const res = data.data.data;
      setproducts(res);
      setIsVisible2(false);
    } catch (err) {
      console.log(err);
    }
  }
  //============< get all subCategory function >=========================================================================
  async function getSubcategory(currentPage2) {
    try {
      const data = await instance.get(
        `/subcategories?page=${currentPage2}&limit=4`
      );
      const res = data.data.data;
      setSubCategoies(res);
    } catch (err) {
      console.log(err);
    }
  }
  //===============< get subcategory which passed on category >===========================================================
  async function getSubcategoryFromCategory(categoryParam) {
    try {
      const data = await instance.get(`/subcategories`);
      const res = data.data.data;
      var cat = await res.filter((subCategory) => {
        return subCategory.parentCategory === categoryParam;
      });

      setSubCategoies(cat);

      const product = cat.map(async (subcat) => {
        const prod = await instance.get(`/subcategories/${subcat.name}`);
        const allProducts = prod.data.data;
        return allProducts;
      });
      const resolvedProducts = await Promise.all(product);
      const allProducts = resolvedProducts.reduce(
        (acc, products) => acc.concat(products),
        []
      );
      setproducts(allProducts);
    } catch (err) {
      console.log(err);
    }
  }
  //===============< get all products >===================================================================================
  async function getProducts(currentPage) {
    try {
      const data = await axios.get(
        `http://localhost:4000/product?page=${currentPage}`
      );
      const res = data.data.data;
      setproducts(res);
    } catch (err) {
      console.log(err);
    }
  }
  //=============================
  const getsearchedProduct = async () => {
    try {
      const res = await instance.get(`/product?keyword=${searchParam}`);
      const result = res.data.data;
      setproducts(result);
      setIsVisible2(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchParam) {
      console.log("fffffffffffffffffffffffffffff");
      getsearchedProduct();
    } else if (subcategoryParam) {
      getSubCategoryProducts(subcategoryParam);
    } else if (categoryParam) {
      getSubcategoryFromCategory(categoryParam);
    } else {
      getProducts(currentPage);
      getSubcategory(currentPage2);
    }
    // console.log("Updated searchedProducts data:", searchedProducts);
  }, [currentPage, searchParam, subcategoryParam, currentPage2, categoryParam]);

  useEffect(() => {
    // console.log("Updated searchedProducts data:", searchedProducts);
  }, [products, SubCategoies]); // This effect will run when searchedProducts changes.

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
                        setIsVisible={setIsVisible}
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
                        setIsVisible={setIsVisible}
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
      <Nav></Nav>
      <Caarousel></Caarousel>

      {/* category &filter &product container */}
      <div className="col-md-10 container">
        {/*subCategory */}
        {isVisible2 && (
          <div>
            <div className=" d-flex justify-content-center align-items-center flex-wrap">
              <div
                onClick={() => getProducts(currentPage)}
                className={style.subcategorydiv}
              >
                <SubCategoy
                  name="All subcategory"
                  img="../assets/images/products-images/images.jpeg"
                />
              </div>
              {SubCategoies &&
                SubCategoies.map((supcategory) => (
                  <div
                    className={`me-4 ms-4 ${style.subcategorydiv}`}
                    key={supcategory._id}
                    onClick={() => getSubCategoryProducts(supcategory.name)}
                  >
                    <SubCategoy
                      name={supcategory.name}
                      img={supcategory.image}
                    />
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
                <li
                  className={`page-item ${currentPage2 > 2 ? "disabled" : ""}`}
                >
                  <a
                    className={`page-link ${style.paginationitems}`}
                    onClick={() => setCurrentPage2(currentPage2 + 1)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
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
            <Pricefilter
              searchParam={searchParam}
              setproducts={setproducts}
              currentPage={currentPage}
              subcategoryParam={subcategoryParam}
              categoryParam={categoryParam}
              setIsVisible={setIsVisible}
            />
            <Colorfilter
              searchParam={searchParam}
              setproducts={setproducts}
              currentPage={currentPage}
              subcategoryParam={subcategoryParam}
              categoryParam={categoryParam}
              setIsVisible={setIsVisible}
            />
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
                    isFavorite={wishList && wishList.find(
                      (single) => single._id._id == product._id
                    )}
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
      <Footer></Footer>
      <div className={`${style.bottomNavContainer}`}>
        <MobileNav></MobileNav>
      </div>
    </div>
  );
}

export default Shop;
