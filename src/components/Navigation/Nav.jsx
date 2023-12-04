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
import { cartRequestAction } from "../../store/slices/cart";
import { userAction } from "../../store/slices/user";
import {
  comingOrdersAction,
  pastOrdersAction,
} from "../../store/slices/orders";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { userAddressGetAction } from "../../store/slices/userAddress";
import { wishListRequestAction } from "../../store/slices/wishList";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { GrLanguage } from "react-icons/gr";
import i18next from "i18next";
import cookie from "js-cookie";
function Nav() {
  const { t } = useTranslation();
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربيه",
      country_code: "sa",
      dir: "rtl",
    },
  ];

  // catch lang code from cookie
  const currentLanguageCode = cookie.get("i18next") || "en";
  // get the languge from the array
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const dispatch = useDispatch();

  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      dispatch(userAction(userId));
      dispatch(pastOrdersAction(userId));
      dispatch(comingOrdersAction(userId));
      dispatch(userAddressGetAction(userId));
    }
    //  dispatch(cartAction())
    dispatch(cartRequestAction());
    dispatch(wishListRequestAction());

    // localization
    document.body.dir = currentLanguage.dir || "ltr";
  }, []);
  useEffect(() => {}, [currentLanguage]);

  var cartList = useSelector((state) => state.cart.cartProducts);
  var wishList = useSelector((state) => state.wishList.list);

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  // ============== handle input change ==============

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // ============== handle form submit   ==============

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/shop/?search=${searchValue}`);
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
                {t("E_Market")}
              </Link>
            </div>
            {/* ============================== Search  ============================== */}

            <div className="col col-md-4 ">
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
              <li className="nav-item  dropdown position-relative">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GrLanguage></GrLanguage>
                </a>
                <ul
                  className="dropdown-menu position-absolute "
                  aria-labelledby="navbarDropdown "
                >
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <button
                        className="dropdown-item"
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <span
                          className={` mx-2    fi fi-${country_code} `}
                        ></span>
                        {name}
                      </button>
                    </li>
                  ))}
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
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>

                      <li>
                        <Link to="/register" className="dropdown-item">
                          Register
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <Link to="/userprofile/" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ----- cart ----- */}
              <li className="nav-item ms-3">
                <span className={`${styles.icon_container} position-relative `}>
                  <Link to="/cart" className="nav-link text-center" href="#">
                    <BsCart3 className={`${styles.icon} fs-4 }`}></BsCart3>
                    {/* Cart items counter above the cart icon */}
                    {cartList
                      ? cartList.length > 0 && (
                          <span
                            className={`badge badge-pill badge-warning rounded-50 bg-warning ${styles.notify}`}
                          >
                            {cartList.length}
                          </span>
                        )
                      : ""}
                  </Link>
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
                    {wishList
                      ? wishList.length > 0 && (
                          <span
                            className={`badge badge-pill badge-warning rounded-50 bg-warning ${styles.notify}`}
                          >
                            {wishList.length}
                          </span>
                        )
                      : ""}
                  </Link>
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
