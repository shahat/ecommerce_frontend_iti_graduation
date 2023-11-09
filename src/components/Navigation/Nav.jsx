import { useContext } from "react";
import { useEffect } from "react";
import styles from "./Nav.module.css";

// import "./dropDorn.css"
import { BsSearch, BsCart3 } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import React from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import SecondNav from "./SecondNav/SecondNav";
import { cartAction } from "../../store/slices/cart";

import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";



import toast, { Toaster } from "react-hot-toast";


function Nav() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(cartAction())
  },[])
  var cartList = useSelector((state)=> state.cart.cartProducts)
  console.log(cartList);
  
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // ============== handle input change ==============
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // ============== handle form submit   ==============
  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/shop/${query}`);
  };

  // ============== handle return   ==============
  const { isLogin, setLogin } = useContext(authContext);

  return (
    <>
      <nav
        className={`navbar d-flex w-100  ${styles.mainNavbar} bg-light border-bottom   `}
      >
        <div className="container-lg  d-flex justify-content-center p-md-0  ">
          <div className="row w-100 justify-content-sm-center justify-content-md-between ">
            {/* ============================== Logo  ============================== */}
            <div className={`${styles.navLogo} col-sm-4 col-md-2  p-0 `}>
              <Link
                to="/"
                className="navbar-brand text-center mx-3 text-md-left"
                href="index.html"
              >
                E-Market
              </Link>
            </div>
            {/* ============================== Search  ============================== */}

            <div className="col col-md-4 ">
              {" "}
              <form
                className="d-flex align-items-center  "
                onSubmit={handleFormSubmit}
              >
                <input
                  className={`form-control border  rounded-0  flex-grow-1 
                  ${styles.form_search} 
                  ${styles.form_search_input}`}
                  type="search"
                  placeholder="Search..."
                  value={query}
                  onChange={handleInputChange}
                />
                <button
                  className={`btn rounded-0 ${styles.form_search} ${styles.form_search_button} bg-warning`}
                  type="submit"
                >
                  <BsSearch
                    className={`${styles.icon} font-weight-bold`}
                  ></BsSearch>
                </button>
              </form>
            </div>
            {/* ============================== nav Links   ============================== */}
            <ul
              className={`navbar-nav ${styles.nav_display} flex-row col-md-4 justify-content-end  m-md-0 p-md-0 `}
            >
              {/* ----- user language -----  */}
              <li className="nav-item  dropdown position-relative ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul
                  className="dropdown-menu position-absolute "
                  aria-labelledby="navbarDropdown "
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      EN
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AR
                    </a>
                  </li>
                </ul>
              </li>
              {/* ----- user profile ----- */}
              <li className="nav-item ms-3 dropdown position-relative">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdOutlinePerson className=" fs-3"></MdOutlinePerson>
                </a>

                <ul
                  className={`dropdown-menu ${styles.number_one} position-absolute `}
                  aria-labelledby="navbarDropdown"
                >
                  {isLogin ? (
                    <li>
                      <Link
                        to="/"
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.removeItem("token");
                          setLogin(false);
                          toast.success("Successfully logged out!", {
                            position: "top-right",
                          });
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link to="login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="register" className="dropdown-item">
                          register
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/userprofile" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              {/* ----- cart ----- */}
              <li className="nav-item ms-3">
                <span className={`${styles.icon_container} position-relative `}>
                  <Link to="/cart" className="nav-link text-center" href="#">
                    <BsCart3 className={`${styles.icon} fs-4 }`}></BsCart3>
                    {/* Cart items counter above the cart icon */}
                    {cartList? cartList.length > 0 && (
                       <span
                       className={`badge badge-pill badge-warning rounded-50 bg-warning ${styles.notify}`}
                     >
                       {cartList.length}
                     </span>
                    ):""}
                  </Link>

                  <span
                    className={`badge badge-pill badge-warning rounded-50 bg-warning ${styles.notify}`}
                  >
                    0
                  </span>
                </span>
              </li>{" "}
              {/* ----- wishList ----- */}
              <li className="nav-item mx-3">
                <span className={`${styles.icon_container} position-relative `}>
                  <Link to="/wishlist" className="nav-link text-center">
                    <MdOutlineFavoriteBorder
                      className={`${styles.icon} fs-4 }`}
                    ></MdOutlineFavoriteBorder>
                    {/* Wish list items counter above the heart icon */}
                    {/* {wishList.length > 0 && (
                      <Stack direction="horizontal">
                        <Badge pill bg="danger position-absolute top-0 ms-4">
                          {wishList.length}
                        </Badge>
                      </Stack>
                    )} */}
                  </Link>

                  <span
                    className={`badge badge-pill badge-warning rounded-50 bg-warning ${styles.notify}`}
                  >
                    0
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <SecondNav></SecondNav>
      <Toaster />
    </>
  );
}

export default Nav;
