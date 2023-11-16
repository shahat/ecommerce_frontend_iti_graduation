import css from "../../assets/style/product.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import {
    moveToCartAction,
    removeFromWishAction,
} from "../../store/slices/wishList";

function WishListProduct({ product }) {
    var dispatch = useDispatch();


    function moveToCart(id) {
        dispatch(moveToCartAction(id));
    }

    function removeFromWishList(id) {
        dispatch(removeFromWishAction(id));
    }

    return (
        <>
            <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
                <div
                    className={`${css["cart_product_left"]} float-start d-flex col-md-6 col-12`}
                >
                    <div
                        className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1 overflow-hidden`}
                        style={{ width: "7.75rem", height: "7.75rem" }}
                    >
                        <img
                            src={product._id.thumbnail}
                            alt=""
                            className="h-100 m-auto overflow-hidden object-fit-scale w-100"
                        />
                    </div>
                    <div
                        className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column col-9`}
                    >
                        <h4>{product._id.title}</h4>
                        <p>
                            details:{" "}
                            <span className="text-secondary">
                                {product._id.description}
                            </span>
                        </p>

                        {/* <h3 className="mt-auto mb-0">{product.price}</h3> */}
                    </div>
                </div>
                <div
                    className={`${css["wish_product_right"]} d-flex flex-column flex-lg-row align-items-center col-md-6 col-12`}
                >
                    <div className="">
                        <button
                            onClick={() => {
                                moveToCart(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-pill px-5 py-3`}
                        >
                            Move To Cart
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={() => {
                                removeFromWishList(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-pill px-5 py-3`}
                        >
                            <FaTrash className=" text-danger" />
                            <span>Remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WishListProduct;

WishListProduct.propTypes = {
    product: PropTypes.object,
    token: PropTypes.string,
};
