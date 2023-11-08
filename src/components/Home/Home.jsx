// import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import style from "./Home.module.css";
import Caarousel from "../Carousel/Caarousel";
import NewArrival from "./NewArrival";
import Categoy from "../Shop/subcategory";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { categoryAction } from "../../store/slices/categories";
import { subCategoryAction } from "../../store/slices/subcategory";
import HomeCategory from "./HomeCategory";
export default function Home() {
  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);

  console.log("categories from home component ", categories);
  console.log("subcategory  from home component ", subCategoies);
  const dispatch = useDispatch();

  // categoryToSub => to make dropdown in second nav
  const categoryToSub = {};
  categories.forEach(
    (category) =>
      (categoryToSub[category.name] = subCategoies.filter(
        (subcategory) => subcategory.parentCategory === category.name
      ))
  );
  console.log(categoryToSub);
  useEffect(() => {
    dispatch(categoryAction());
    dispatch(subCategoryAction());
  }, []);
  return (
    <>
      {/* ==================================  Caarousel start  ================================== */}
      <Caarousel></Caarousel>
      {/* ================================== Start of Category ==================================  */}

      <div className="container-fluid pt-5">
        <h2 className=" position-relative text-uppercase mx-xl-5 mb-4">
          <span className="pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories.map((category) => (
            <HomeCategory
              key={category._id}
              image={category.image}
              name={category.name}
              categoryToSub={categoryToSub[category.name]}
            ></HomeCategory>
          ))}
        </div>
      </div>

      <NewArrival clothes={categoryToSub.clothes} />
      <NewArrival electronics={categoryToSub.electronics} />
    </>
  );
}
