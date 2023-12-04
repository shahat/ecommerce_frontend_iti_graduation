import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { LiaStoreSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./mobileNav.module.css";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export default function MobileNav() {
  var cartList = useSelector((state) => state.cart.cartProducts);
  var wishList = useSelector((state) => state.wishList.list);

  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);

  const { isLogin, setLogin } = useContext(authContext);

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
    <div className={`${styles.bottom_nav}`}>
      <ul className="navbar-nav flex-row h-100  justify-content-around align-items-center  m-auto  bg-light text-black-50 ">
        {/* ----- user language -----  */}
        <li className="nav-item mx-3">
          <span className={`${styles.icon_container}`}>
            <Link to="/shop" className="nav-link text-center">
              <Dropdown>
                <Dropdown.Toggle variant="btn border-0 " id="dropdown-basic">
                  <LiaStoreSolid className={`${styles.icon} fs-4 }`} />{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map((category) =>
                    categoryToSub[category.name].length == 0 ? (
                      <Dropdown.Item href="#/action-1" key={Math.random()}>
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
                          {categoryToSub[category.name].map((subcategory) => (
                            <Dropdown.Item key={Math.random()} eventKey="2">
                              {subcategory.name}
                            </Dropdown.Item>
                          ))}
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
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/register" className="dropdown-item">
                    Register
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
          </ul>
        </li>
        {/* ----- cart ----- */}
        <li className="nav-item ms-3 position-relative">
          <span className={`${styles.icon_container} `}>
            <Link to="/cart" className="nav-link text-center " href="#">
              <BsCart3 className={`${styles.icon} fs-4 `}></BsCart3>
              {/* Cart items counter above the cart icon */}
              {cartList
                ? cartList.length > 0 && (
                    <span
                      className={`badge badge-pill badge-warning position-absolute top-0 rounded-50 bg-warning rounded-circle ${styles.notify}`}
                    >
                      {cartList.length}
                    </span>
                  )
                : ""}
            </Link>
          </span>
        </li>
        {/* ----- wishList ----- */}
        <li className="nav-item mx-3 position-relative">
          <span className={`${styles.icon_container}  `}>
            <Link to="/wishlist" className="nav-link text-center ">
              <MdOutlineFavoriteBorder
                className={`${styles.icon} fs-4 }`}
              ></MdOutlineFavoriteBorder>
            </Link>
            {wishList
              ? wishList.length > 0 && (
                  <span
                    className={`badge badge-pill badge-warning position-absolute top-0 rounded-50 bg-warning rounded-circle ${styles.notify}`}
                  >
                    {wishList.length}
                  </span>
                )
              : ""}
          </span>
        </li>
      </ul>
    </div>
  );
}
