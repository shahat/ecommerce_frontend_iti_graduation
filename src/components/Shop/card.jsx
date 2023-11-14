/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import style from "./shop.module.css";
import { useDispatch } from "react-redux";
// import { addToCartAction } from "../../store/slices/cart";
import { addToBothCartsAction } from "./../../store/slices/cart";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function Card(props) {
  var dispatch = useDispatch();
  var x = useNavigate();
  // var cart = useSelector((state) => state.cart.cart);

  var addtocart = (id) => {
    console.log(id);
    toast.success(`product added to the cart successifuly`);
    dispatch(addToBothCartsAction(id));
  };
  return (
    <div className={style.cardwidth}>
      <div className={`card-div col mb-4 ${style.card}`}>
        <div className="card card-item border-0">
          <img
            src={props.img}
            className={`card-img-top imageOverLay ${style.cardimg}`}
            alt="..."
          />
          <div className>
            <div
              className={style.cardtitlediv}
              onClick={() => x(`/product/${props.id}`)}
            >
              <h5 className={`card-title ps-3 my-2 fs-6 ${style.cardtitle}`}>
                {props.title}
              </h5>
            </div>
            <div className="card-text ms-2">
              <span className="ps-3">{props.price} $</span>
              <span className="text-decoration-line-through text-danger ms-2  ">
                {props.priceAfterDiscount} $
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
              onClick={() => addtocart(props.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Card;
