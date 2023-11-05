/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import style from "./shop.module.css";
function Card({  props}) {
  return (
    <div className={style.cardwidth}>
      <div className={`card-div col mb-4 ${style.card}`}>
        <div className="card card-item border-0">
          <img className={style.cardimg} src={props.img} alt={props.title} />
          <div>
            <div className={style.cardtitlediv}>
              <h5 className={` ps-3 my-2 ${style.cardtitle}`}>
                {props.title}{" "}
              </h5>
            </div>
            <div className="card-text my-2">
              <span className="text-danger ps-3">{props.price} $</span>
              <span className="text-decoration-line-through ms-2  ">
                {props.priceAfterDescount} $
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
