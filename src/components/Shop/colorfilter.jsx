// import React from 'react';
import "./chechbox.css";
import axios from "axios";
import { useState } from "react";

const Colorfilter = ({ setproducts, currentPage, setIsVisible }) => {
  const [checkedId, setCheckedId] = useState(null);
  var info = [
    { id: 1, name: "black" },
    { id: 2, name: "white" },
    { id: 3, name: "red" },
    { id: 4, name: "blue" },
    { id: 5, name: "green" },
  ];
  var colorFilter = async (color, id) => {
    console.log(color);
    try {
      const data = await axios.get(
        `http://localhost:4000/product?color=${color}`
      );
      const res = data.data.data;
      setproducts(res);
      setCheckedId(id);
      setIsVisible(false);
    } catch (err) {
      console.log(err);
    }
  };
  var handleSelectAll = async (currentPage) => {
    try {
      const data = await axios.get(
        `http://localhost:4000/product?page=${currentPage}`
      );
      const res = data.data.data;
      setproducts(res);
      setCheckedId(null);
      setIsVisible(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4 fs-6 fs-6">
          Filter by Color
        </h5>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            checked={checkedId === null}
            id="color-all"
            onChange={() => handleSelectAll(currentPage)}
          />
          <label className="custom-control-label" htmlFor="color-all">
            All Color
          </label>
        </div>
        <form>
          {info &&
            info.map((color) => (
              <div
                key={color.id}
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={checkedId === color.id}
                  id={`color-${color.id}`}
                  onChange={() => colorFilter(color.name, color.id)}
                  value={color}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`color-${color.id}`}
                >
                  {color.name}
                </label>
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Colorfilter;
