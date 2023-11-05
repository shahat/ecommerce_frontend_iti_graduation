/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import style from "./shop.module.css";
function Card({ title, img, price, afterDiscout }) {
  return (
    <div className={style.cardwidth}>
      <div className="card-div col mb-4">
        <div className="card card-item border-0">
          <img src={img} className="card-img-top imageOverLay" alt="..." />
          <div className>
            <h5 className="card-title ps-3 my-2 fs-6">{title}</h5>
            <div className="card-text my-2">
              <span className="text-danger ps-3">{afterDiscout}</span>
              <span className="text-decoration-line-through ms-2  ">
                {price} $
              </span>
              
              <div className={`product-rate mb-2 ps-3 ${style.rate}`}>
                <FaStar className=" ps-1" />
                <FaStar className=" ps-1" />
                <FaStar className=" ps-1" />
                <FaStar className=" ps-1" />
                <FaStar className=" ps-1" />
              </div>
            </div>
            <button
              className={`btn btn-primary w-100 card-button border-top-0 ${style.cardbutton}`}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
