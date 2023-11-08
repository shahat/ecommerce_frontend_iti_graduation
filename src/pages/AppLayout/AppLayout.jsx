import React from "react";
import styles from "./AppLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
import { LiaStoreSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function AppLayout() {
  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);

  const categoryToSub = {};
  categories.forEach(
    (category) =>
      (categoryToSub[category.name] = subCategoies.filter(
        (subcategory) => subcategory.parentCategory === category.name
      ))
  );
  const handleLogout = () => {
    alert("you are loged out ");
  };
  return (
    <>
      <div className={`postion-relative ${styles.appLayout}`}>
        <div className={`${styles.fixed_nav} w-100`}>
          <Nav></Nav>
        </div>

        <Outlet></Outlet>
        <Footer></Footer>
        <div className={`${styles.bottomNavContainer}`}>
          <div className={`${styles.bottom_nav}`}>
            <ul className="navbar-nav flex-row h-100  justify-content-around align-items-center  m-auto  bg-light text-black-50 ">
              {/* ----- user language -----  */}
              <li className="nav-item mx-3">
                <span className={`${styles.icon_container}`}>
                  <Link to="/shop" className="nav-link text-center">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="btn border-0 "
                        id="dropdown-basic"
                      >
                        <LiaStoreSolid className={`${styles.icon} fs-4 }`} />{" "}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {categories.map((category) =>
                          categoryToSub[category.name].length == 0 ? (
                            <Dropdown.Item
                              href="#/action-1"
                              key={Math.random()}
                            >
                              {category.name}
                            </Dropdown.Item>
                          ) : (
                            <Dropdown key={Math.random()}>
                              <DropdownButton
                                id="dropdown-button-drop-end"
                                drop="end"
                                variant="btn border-0 text-start w-100"
                                title={category.name}
                                className="col-12 w-100"
                              >
                                {categoryToSub[category.name].map(
                                  (subcategory) => (
                                    <Dropdown.Item
                                      key={Math.random()}
                                      eventKey="2"
                                    >
                                      {subcategory.name}
                                    </Dropdown.Item>
                                  )
                                )}
                              </DropdownButton>
                            </Dropdown>
                          )
                        )}
                      </Dropdown.Menu>
                           
                    </Dropdown>
                  </Link>
                </span>
              </li>
              <li className="nav-item mx-3">
                <span className={`${styles.icon_container}`}>
                  <Link to="/" className="nav-link text-center">
                    <AiOutlineHome className={`${styles.icon} fs-4 }`} />
                  </Link>
                </span>
              </li>
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
              <li className="nav-item ms-3 position-relative">
                <span className={`${styles.icon_container} `}>
                  <Link to="/cart" className="nav-link text-center " href="#">
                    <BsCart3 className={`${styles.icon} fs-4 }`}></BsCart3>
                  </Link>
                </span>
                <span
                  className={`badge badge-pill badge-warning position-absolute top-0 rounded-50 bg-warning rounded-circle ${styles.notify}`}
                >
                  0
                </span>
              </li>{" "}
              {/* ----- wishList ----- */}
              <li className="nav-item mx-3 position-relative">
                <span className={`${styles.icon_container}  `}>
                  <Link to="/wishlist" className="nav-link text-center ">
                    <MdOutlineFavoriteBorder
                      className={`${styles.icon} fs-4 }`}
                    ></MdOutlineFavoriteBorder>
                  </Link>

                  <span
                    className={`badge badge-pill badge-warning position-absolute top-0 rounded-50 bg-warning rounded-circle ${styles.notify}`}
                  >
                    0
                  </span>
                </span>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
