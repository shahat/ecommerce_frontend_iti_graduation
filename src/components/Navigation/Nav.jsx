import styles from "./Nav.module.css";
import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
// import React from "react";
import { Link } from "react-router-dom";
const handleLogout = () => {
  alert("you are loged out ");
};
function Nav() {
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
              <form className="d-flex align-items-center  ">
                <input
                  className={`form-control border border-success rounded-0  flex-grow-1 ${styles.form_search} ${styles.form_search_input}`}
                  type="search"
                  placeholder=" Search for the products "
                  aria-label="Search"
                />
                <button
                  className={`btn rounded-0 ${styles.form_search} ${styles.form_search_button} bg-warning`}
                  type="submit"
                >
                  <BsSearch
                    className={`${styles.icon} font-weight-bold`}
                  ></BsSearch>
                  {/* Search */}
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
                  Language
                </a>
                <ul
                  className="dropdown-menu position-absolute "
                  aria-labelledby="navbarDropdown "
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
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
                  <li>
                    <Link className="dropdown-item" onClick={handleLogout}>
                      LogOut
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ----- cart ----- */}
              <li className="nav-item ms-3">
                <span className={`${styles.icon_container}`}>
                  <Link to="/cart" className="nav-link text-center" href="#">
                    <BsCart3 className={`${styles.icon} fs-4 }`}></BsCart3>
                  </Link>
                </span>
              </li>{" "}
              {/* ----- wishList ----- */}
              <li className="nav-item mx-3">
                <span className={`${styles.icon_container}`}>
                  <Link to="/wishlist" className="nav-link text-center">
                    <MdOutlineFavoriteBorder
                      className={`${styles.icon} fs-4 }`}
                    ></MdOutlineFavoriteBorder>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
