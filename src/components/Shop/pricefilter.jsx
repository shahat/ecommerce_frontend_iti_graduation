import "./chechbox.css";
// import axios from "axios";
import { useState } from "react";
import instance from "../../axiosConfig/instance";
const Pricefilter = ({
  setproducts,
  currentPage,
  setIsVisible,
  searchParam,
  subcategoryParam,
  categoryParam,
}) => {
  const [checkedId, setCheckedId] = useState(null);
  var info = [
    { id: 1, min: 0, max: 500 },
    { id: 2, min: 600, max: 1000 },
    { id: 3, min: 1000, max: 5000 },
    { id: 4, min: 5000, max: 10000 },
    { id: 5, min: 10000, max: 50000 },
  ];
  // let url = "/product?";

  // =================== Filter Price  ===================
  // var filterProductByPrice = async ({
  //   filterPice,
  //   min,
  //   max,
  //   id,
  //   currentPage,
  //   searchParam,
  //   subcategoryParam,
  //   categoryParam,
  // }) => {
  //   if (filterPice) {
  //     url = url + `priceMin=${min}&priceMax=${max}`;
  //   }
  //   if (searchParam) {
  //     url = url + `priceMin=${min}&priceMax=${max}&keyword=${searchParam}`;
  //   }
  //   if (subcategoryParam) {
  //     url =
  //       url + `priceMin=${min}&priceMax=${max}&subcategory=${subcategoryParam}`;
  //   }
  //   if (categoryParam) {
  //     url = url + `priceMin=${min}&priceMax=${max}&category=${categoryParam}`;
  //   } else {
  //     url = url + `page=${currentPage}`;
  //   }

  //   try {
  //     const data = await instance.get(`${url}`);
  //     const res = data.data.data;
  //     setproducts(res);
  //     setCheckedId(id);
  //     setIsVisible(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  var filterProductByPrice = async (min, max, id) => {
    try {
      if (searchParam) {
        const data = await instance.get(
          `/product?priceMin=${min}&priceMax=${max}&keyword=${searchParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else if (subcategoryParam) {
        const data = await instance.get(
          `/product?priceMin=${min}&priceMax=${max}&subcategory=${subcategoryParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else if (categoryParam) {
        const data = await instance.get(
          `/product?priceMin=${min}&priceMax=${max}&category=${categoryParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else {
        const data = await instance.get(
          `/product?priceMin=${min}&priceMax=${max}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  var filterProductByPriceAll = async (currentPage) => {
    try {
      if (searchParam) {
        const data = await instance.get(
          `/product?&keyword=${searchParam}&page=${currentPage}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(null);
        setIsVisible(false);
      } else if (subcategoryParam) {
        const data = await instance.get(
          `/product?&subcategory=${subcategoryParam}&page=${currentPage}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(null);
        setIsVisible(false);
      } else if (categoryParam) {
        const data = await instance.get(
          `/product?&category=${categoryParam}&page=${currentPage}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(null);
        setIsVisible(false);
      } else {
        const data = await instance.get(`/product?page=${currentPage}`);
        const res = data.data.data;
        setproducts(res);
        setCheckedId(null);
        setIsVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4 fs-6 fs-6">
          Filter by price
        </h5>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="price-all"
            checked={checkedId === null}
            onChange={() => filterProductByPriceAll(currentPage)}
          />
          <label className="custom-control-label" htmlFor="price-all">
            All price
          </label>
        </div>
        <form>
          {info &&
            info.map((price) => (
              <div
                key={price.id}
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={checkedId === price.id}
                  id={`price-${price.id}`}
                  onChange={() =>
                    filterProductByPrice(
                      // searchParam: searchParam,
                      // categoryParam: categoryParam,
                      // subcategoryParam: subcategoryParam,
                      // filterPice: true,
                      price.min,
                      price.max,
                      price.id
                    )
                  }
                />
                <label
                  className="custom-control-label"
                  htmlFor={`price-${price.id}`}
                >
                  {`${price.min}-${price.max}`}
                </label>
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};
// Pricefilter.propTypes = {
//   setProducts: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   isVisible: PropTypes.func.isRequired,
// };

export default Pricefilter;
