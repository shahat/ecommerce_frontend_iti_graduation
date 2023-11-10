// import css from "../../pages/Cart/cart.module.css";
import css from "../../assets/style/product.module.css";
import PropTypes from "prop-types";
import instance from "../../axiosConfig/instance";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { removeFromCartAction } from "../../store/slices/cart";
import { changeSubTotal } from "../../store/slices/checkOut";

function CartProduct({ product }) {
    var [quantity, setQuantity] = useState(product.quantity);
    let { token, token2 } = localStorage;
    let headers = {};
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            changeSubTotal(
                changeSubTotal(product.priceWhenAdded * product.quantity)
            )
        );
    }, []);

    function inc(productId) {
        if (quantity < product._id.quantity) {
            setQuantity(++quantity);
            token ? (headers = { token }) : (headers = { token: token2 });
            instance.patch("/cart", { productId, quantity }, { headers });
            dispatch(changeSubTotal(product._id.price));
        }
    }

    function dec(productId) {
        if (quantity > 1) {
            setQuantity(--quantity);
            token ? (headers = { token }) : (headers = { token: token2 });
            instance.patch("/cart", { productId, quantity }, { headers });
            dispatch(changeSubTotal(-product._id.price));
        }
    }

    async function removeFromcart(productId) {
        dispatch(removeFromCartAction(productId));
        dispatch(changeSubTotal(-(product._id.price * quantity)));
    }

    return (
        <>
            <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
                <div
                    className={`${css["cart_product_left"]} float-start d-flex col-9`}
                >
                    {/* Card Image */}
                    <div
                        className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1 overflow-hidden`}
                        style={{ width: "7.75rem", height: "7.75rem" }}
                    >
                        <img
                            src={product._id.thumbnail}
                            className="h-100 m-auto overflow-hidden object-fit-scale w-100"
                        />
                    </div>
                    <div
                        className={`${css["cart_product_details"]} float-start col-8 px-2 d-flex flex-column`}
                    >
                        <h4>{product._id.title}</h4>
                        <p>
                            <span className="text-secondary">
                                {product._id.description}
                            </span>
                        </p>
                        {/* <p>
                            Color: <span className="text-secondary">Blue</span>
                        </p> */}
                        <h3 className="mt-auto mb-0">
                            {product._id.price * quantity} EGP
                        </h3>
                    </div>
                </div>
                <div
                    className={`${css["cart_product_right"]} d-flex align-items-end align-content-between col-3`}
                >
                    <button
                        className="btn text-danger fs-5"
                        onClick={() => {
                            removeFromcart(product._id._id);
                        }}
                    >
                        <FaTrash />
                    </button>
                    <div className="d-flex">
                        <button
                            onClick={() => {
                                dec(product._id._id);
                            }}
                            className={
                                `${css.myBtn} rounded-0 rounded-start-5 w-25 ` +
                                (quantity === 1 &&
                                    ` bg-secondary-subtle border-0`)
                            }
                        >
                            <FaMinus />
                        </button>
                        <button
                            type=""
                            className="w-50 border bg-white px-4 fw-semibold"
                        >
                            {quantity}
                        </button>

                        <button
                            onClick={() => {
                                inc(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-0 rounded-end-5 w-25`}
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartProduct;

CartProduct.propTypes = {
    product: PropTypes.object,
    sub: PropTypes.func,
};
