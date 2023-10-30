import React from "react";
import styles from "./AppLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";
import { Link } from "react-router-dom";
import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
export default function AppLayout() {
  const handleLogout = () => {
    alert("you are loged out ");
  };
  return (
    <>
      <div className="postion-relative">
        <div className={`${styles.fixed_nav} w-100`}>
          <Nav></Nav>
        </div>

        <Outlet></Outlet>
        <Footer></Footer>
        <div className={`${styles.bottomNavContainer}`}>
          <div className={`${styles.bottom_nav}`}>
            <ul className="navbar-nav flex-row h-100  justify-content-around align-items-center  m-auto  bg-light text-black-50 ">
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
          </div>{" "}
        </div>
      </div>
    </>
  );
}
