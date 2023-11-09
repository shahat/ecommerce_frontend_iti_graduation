// import React from "react";
import "./chechbox.css";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const Pricefilter = ({ setproducts, currentPage }) => {
  const [checkedId, setCheckedId] = useState(null);
  var info = [
    { id: 1, min: 0, max: 500 },
    { id: 2, min: 600, max: 1000 },
    { id: 3, min: 1000, max: 5000 },
    { id: 4, min: 5000, max: 10000 },
    { id: 5, min: 10000, max: 50000 },
  ];
  var click = async (min, max, id) => {
    try {
      const data = await axios.get(
        `http://localhost:5000/product?priceMin=${min}&priceMax=${max}`
      );
      const res = data.data.data;
      setproducts(res);
      setCheckedId(id);
    } catch (err) {
      console.log(err);
    }
  };
  var handleSelectAll = async (currentPage) => {
    try {
      const data = await axios.get(
        `http://localhost:5000/product?page=${currentPage}`
      );
      const res = data.data.data;
      setproducts(res);
      setCheckedId(null);
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
            onChange={() => handleSelectAll(currentPage)}
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
                  onChange={() => click(price.min, price.max, price.id)}
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
Pricefilter.propTypes = {
  setproducts: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pricefilter;