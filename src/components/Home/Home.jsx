import { useSelector, useDispatch } from "react-redux";
import Caarousel from "../Carousel/Caarousel";
import NewArrival from "./NewArrival";
import { useEffect } from "react";
import { categoryAction } from "../../store/slices/categories";
import { subCategoryAction } from "../../store/slices/subcategory";
import HomeCategory from "./HomeCategory";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  const categories = useSelector((state) => state.categories.categories);
  var subCategoies = useSelector((state) => state.subCategories.subCategories);
  const currentLanguageCode = cookie.get("i18next") || "en";
  const dispatch = useDispatch();
  const categoryToSub = {};
  categories.forEach(
    (category) =>
      (categoryToSub[category.name] = subCategoies.filter(
        (subcategory) => subcategory.parentCategory === category.name
      ))
  );

  useEffect(() => {
    dispatch(categoryAction());
    dispatch(subCategoryAction());
    console.log("subCategoies inside Home ", subCategoies);
  }, []);

  return (
    <>
      {/* ============<  Caarousel start  >============ */}
      <Caarousel></Caarousel>
      {/* ============< Start of Category >============  */}

      <div className="container-lg px-0 pt-5">
        <h2 className=" position-relative text-uppercase  mb-4">
          <span className="pr-3">{t("categories")}</span>
        </h2>
        <div className="row  my-5">
          {categories.slice(0, 8).map((category) => (
            <HomeCategory
              key={category._id}
              image={category.image}
              name={
                currentLanguageCode == "en" ? category.name : category.name_ar
              }
              categoryToSub={categoryToSub[category.name]}
              lng={currentLanguageCode}
            ></HomeCategory>
          ))}
        </div>
      </div>

      {categories && categories.length > 0 && (
        <>
          <div className="my-5">
            {categoryToSub.clothes && (
              <NewArrival
                clothes={categoryToSub.clothes}
                title={t("lates_Clothes_collection")}
                lng={currentLanguageCode}
              />
            )}
          </div>

          {categoryToSub.electronics && (
            <NewArrival
              electronics={categoryToSub.electronics}
              title={t("lates_electronics_collection")}
              lng={currentLanguageCode}
            />
          )}
        </>
      )}
    </>
  );
}
