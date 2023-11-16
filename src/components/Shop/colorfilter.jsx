// import React from 'react';
import "./chechbox.css";
// import axios from "axios";
import { useState } from "react";
import instance from "../../axiosConfig/instance";

const Colorfilter = ({
  setproducts,
  currentPage,
  setIsVisible,
  searchParam,
  subcategoryParam,
  categoryParam,
}) => {
  const [checkedId, setCheckedId] = useState(null);
  var info = [
    { id: 1, name: "black" },
    { id: 2, name: "white" },
    { id: 3, name: "red" },
    { id: 4, name: "blue" },
    { id: 5, name: "green" },
  ];
  // var url = `/product?`;
  // var colorFilter = async ({ colorFilter, color, id, currentPage }) => {
  //   if (colorFilter == true) {
  //     url = url + `color=${color}`;
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
  var colorFilter = async (color, id) => {
    try {
      if (searchParam) {
        const data = await instance.get(
          `/product?color=${color}&keyword=${searchParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else if (subcategoryParam) {
        const data = await instance.get(
          `/product?color=${color}&subcategory=${subcategoryParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else if (categoryParam) {
        const data = await instance.get(
          `/product?color=${color}&category=${categoryParam}`
        );
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      } else {
        const data = await instance.get(`/product?color=${color}`);
        const res = data.data.data;
        setproducts(res);
        setCheckedId(id);
        setIsVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  var colorFiltrAll = async (currentPage) => {
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
          Filter by Color
        </h5>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            checked={checkedId === null}
            id="color-all"
            onChange={() => colorFiltrAll(currentPage)}
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
                  onChange={() =>
                    colorFilter(
                      //   {
                      //   colorFilter: true,
                      //   color: color.name,
                      //   id: color.id,
                      // }
                      color.name,
                      color.id
                    )
                  }
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
