import "./chechbox.css";
import axios from "axios";
import { useState } from "react";
import instance from "../../axiosConfig/instance";
const Pricefilter = ({ setproducts, currentPage, setIsVisible }) => {
  const [checkedId, setCheckedId] = useState(null);
  var info = [
    { id: 1, min: 0, max: 500 },
    { id: 2, min: 600, max: 1000 },
    { id: 3, min: 1000, max: 5000 },
    { id: 4, min: 5000, max: 10000 },
    { id: 5, min: 10000, max: 50000 },
  ];
  let url = "/product?";


  // =================== Filter Price  ===================
  var filterProductByPrice = async ({
    filterPice,
    min,
    max,
    id,
    currentPage,
  }) => {
    if (filterPice) {
      url = url + `priceMin=${min}&priceMax=${max}`;
    } else {
      url = url + `page=${currentPage}`;
    }

    try {
      const data = await instance.get(`${url}`);
      const res = data.data.data;
      setproducts(res);
      setCheckedId(id);
      setIsVisible(false);
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
            onChange={() =>
              filterProductByPrice({
                filterPice: false,
                id: null,
                currentPage,
              })
            }
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
                    filterProductByPrice({
                      filterPice: true,
                      min: price.min,
                      max: price.max,
                      id: price.id,
                    })
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
