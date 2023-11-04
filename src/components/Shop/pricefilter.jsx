// import React from "react";
import "./chechbox.css";

const Pricefilter = () => {
  return (
    <div>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4 fs-6 fs-6">
          Filter by price
        </h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked
              id="price-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Price
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-1"
            />
            <label className="custom-control-label" htmlFor="price-1">
              $0 - $100
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-2"
            />
            <label className="custom-control-label" htmlFor="price-2">
              $100 - $200
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-3"
            />
            <label className="custom-control-label" htmlFor="price-3">
              $200 - $300
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-4"
            />
            <label className="custom-control-label" htmlFor="price-4">
              $300 - $400
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-5"
            />
            <label className="custom-control-label" htmlFor="price-5">
              $400 - $500
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pricefilter;
