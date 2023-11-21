import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlinePerson } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { LiaStoreSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./mobileNav.module.css";
// =========< Localization >=========
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { GrLanguage } from "react-icons/gr";
import i18next from "i18next";
export default function MobileNav() {
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

  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  var cartList = useSelector((state) => state.cart.cartProducts);
  var wishList = useSelector((state) => state.wishList.list);

  const handleLogout = () => {
    alert("you are loged out ");
  };

  return (
    <div className={`${styles.bottom_nav}`}>
      <ul className="navbar-nav flex-row h-100  justify-content-around align-items-center  m-auto  bg-light text-black-50 ">
        {/* ----- user language -----  */}
        <li className="nav-item mx-3">
          <span className={`${styles.icon_container}`}>
            <Link
              to="/shop"
              className="nav-link text-center d-flex flex-column align-items-center"
            >
              <LiaStoreSolid className={`${styles.icon} fs-4 }`} />
              <small className="d-none d-sm-inline"> categories</small>
            </Link>
          </span>
        </li>
        <li className="nav-item mx-3">
          <span className={`${styles.icon_container}`}>
            <Link
              to="/"
              className="nav-link text-center d-flex flex-column align-items-center "
            >
              <AiOutlineHome className={`${styles.icon} fs-4 }`} />
              <small className="d-none d-sm-inline">Home</small>
            </Link>
          </span>
        </li>
        <li className="nav-item  dropdown position-relative ">
          <a
            className="nav-link dropdown-toggle"
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
                  <span className={` mx-2    fi fi-${country_code} `}></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </li>
        {/* ----- user profile ----- */}
        <li className="nav-item ms-3 dropdown position-relative  d-flex flex-column align-items-center  ">
          <button
            className="nav-link dropdown-toggle p-0"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MdOutlinePerson className=" fs-3"></MdOutlinePerson>
          </button>
          <small className="d-none d-sm-inline">Profile</small>

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
        <li className="nav-item ms-3 position-relative ">
          <span className={`${styles.icon_container} `}>
            <Link
              to="/cart"
              className="nav-link text-center  d-flex flex-column align-items-center"
            >
              <BsCart3 className={`${styles.icon} fs-4 `}></BsCart3>
              <small className="d-none d-sm-inline">cart</small>
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
        </li>{" "}
        {/* ----- wishList ----- */}
        <li className="nav-item mx-3 position-relative">
          <span className={`${styles.icon_container}  `}>
            <Link
              to="/wishlist"
              className="nav-link text-center  d-flex flex-column align-items-center "
            >
              <MdOutlineFavoriteBorder className={`${styles.icon} fs-4 }`} />
              <small className="d-none d-sm-inline">WishList</small>

              {wishList
                ? wishList.length > 0 && (
                    <span
                      className={`badge badge-pill badge-warning position-absolute top-0 rounded-50 bg-warning rounded-circle ${styles.notify}`}
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
  );
}
