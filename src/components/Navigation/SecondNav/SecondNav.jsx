import React, { useState } from "react";
import styles from "./SecondNav.module.css";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { categoryAction } from "../../../store/slices/categories";
import { subCategoryAction } from "../../../store/slices/subcategory";
import { useEffect } from "react";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
export default function SecondNav() {
  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);

  const categoryToSub = {};
  categories.forEach(
    (category) =>
      (categoryToSub[category.name] = subCategoies.filter(
        (subcategory) => subcategory.parentCategory === category.name
      ))
  );
  const dispatch = useDispatch();
  // console.log("categories from secondnav component ", categories);
  // console.log("subcategory from secondnav component ", subCategoies);
  useEffect(() => {
    dispatch(categoryAction());
    dispatch(subCategoryAction());
  }, []);

  return (
    <div className={`bg-dark ${styles.nav_display}`}>
      <div className="container-lg">
        <div className="row ">
          <div className="col-3  position-relative bg-warning p-0 ">
            <Dropdown>
              <Dropdown.Toggle variant="btn border-0 " id="dropdown-basic">
                Categories
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
          </div>

          <div className="col-9 d-flex align-items-center ">
            <nav className="navbar  bg-dark navbar-dark   py-0 px-0">
              <div className=" justify-content-between" id="navbarCollapse">
                <div className="navbar-nav d-flex flex-row   mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="shop.html" className="nav-item mx-3 nav-link">
                    Shop
                  </a>
                  <a href="checkout.html" className="nav-item mx-3 nav-link">
                    Checkout
                  </a>
                  <a href="contact.html" className="nav-item mx-3 nav-link">
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
