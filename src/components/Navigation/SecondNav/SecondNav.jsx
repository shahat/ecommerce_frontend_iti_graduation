import styles from "./SecondNav.module.css";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { categoryAction } from "../../../store/slices/categories";
import { subCategoryAction } from "../../../store/slices/subcategory";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

export default function SecondNav() {
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";
  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);

  const categoryToSub = {};
  categories.forEach(
    (category) =>
      (categoryToSub[category.name] = subCategoies.filter(
        (subcategory) => subcategory.parentCategory === category.name
      ))
  );
  console.log("categoryToSub", categoryToSub);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryAction());
    dispatch(subCategoryAction());
  }, []);

  return (
    <div
      className={`bg-dark ${styles.nav_display} ${
        currentLanguageCode === "ar" ? styles.rtl : ""
      }`}
    >
      <div className="container-lg">
        <div className="row ">
          <div className="col-3  position-relative bg-warning p-0 ">
            <Dropdown
              className={`${currentLanguageCode === "ar" ? styles.rtl : ""}`}
            >
              <Dropdown.Toggle variant="btn border-0 " id="dropdown-basic">
                {t("categories")}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((category) =>
                  categoryToSub[category.name].length == 0 ? (
                    <Dropdown.Item href="#/action-1" key={Math.random()}>
                      {currentLanguageCode === "en"
                        ? category.name
                        : category.name_ar}
                    </Dropdown.Item>
                  ) : (
                    <Dropdown key={Math.random()}>
                      <DropdownButton
                        id="dropdown-button-drop-end"
                        drop="end"
                        variant="btn border-0 text-start w-100"
                        title={
                          currentLanguageCode === "en"
                            ? category.name
                            : category.name_ar
                        }
                        className="col-12 w-100"
                      >
                        {categoryToSub[category.name].map((subcategory) => (
                          <Dropdown.Item key={Math.random()} eventKey="2">
                            <Link to={`/shop/?subcategory=${subcategory.name}`}>
                              {currentLanguageCode === "en"
                                ? subcategory.name
                                : subcategory.name_ar}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Dropdown>
                  )
                )}
              </Dropdown.Menu>
                   
            </Dropdown>
          </div>

          <div className="col-9 d-flex align-items-center ">
            <nav className="navbar  bg-dark navbar-dark   py-0 px-0">
              <div className=" justify-content-between" id="navbarCollapse">
                <div className="navbar-nav d-flex flex-row   mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active">
                    {t("home")}
                  </Link>
                  <Link to="/shop" className="nav-item mx-3 nav-link">
                    {t("shop")}
                  </Link>

                  <Link to="/contact" className="nav-item mx-3 nav-link">
                    {t("contact")}
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
