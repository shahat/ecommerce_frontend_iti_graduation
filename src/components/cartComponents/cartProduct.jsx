import css from "../../assets/style/product.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { changeSubTotal } from "../../store/slices/checkOut";
import {
    cartRequestAction,
    modifyBothProductAction,
    removeFromCartAction,
} from "../../store/slices/cart";

function CartProduct({ product, quantity }) {
    const dispatch = useDispatch();
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [inputField, setInput] = useState(false);
    const [inputValue, setInputValue] = useState();
    useEffect(() => {
        quantity > 9 ? setInput(true) : setInput(false);
        setInputValue(quantity)
        dispatch(cartRequestAction());
    }, [dispatch, quantity]);

    function modifyProduct(quantity) {
        if (quantity === 10) {
            setInput(true);
        } else if (quantity > 0 && quantity < 10) {
            dispatch(
                modifyBothProductAction({ productId: product._id._id, quantity })
            );
        } else {
            toast.error(`Select a real number`);
        }
    }

    function priceEnter(e, quantity) {
        e.preventDefault();
        if (quantity < 10) {
            setInput(false);
            dispatch(
                modifyBothProductAction({ productId: product._id._id, quantity })
            );
        } else if (quantity < product._id.quantity) {
            dispatch(
                modifyBothProductAction({ productId: product._id._id, quantity })
            );
        } else {
            toast.error(`There is no enough items in the stock!`);
        }
    }

    function removeFromCart(productId) {
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
                        <h3 className="mt-auto mb-0">
                            {product._id.price} EGP
                        </h3>
                    </div>
                </div>
                <div
                    className={`${css["cart_product_right"]} d-flex align-items-end align-content-between col-3`}
                >
                    <button
                        className="btn text-danger fs-5"
                        onClick={() => {
                            removeFromCart(product._id._id);
                        }}
                    >
                        <FaTrash />
                    </button>
                    {/* <div className="d-flex">
                        <button
                            onClick={() => {
                                modifyProduct(product._id._id);
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
                                modifyProduct(product._id._id);
                            }}
                            className={`${css.myBtn} rounded-0 rounded-end-5 w-25`}
                        >
                            <FaPlus />
                        </button>
                    </div> */}
                    <div className="d-flex align-items-center fw-semibold">
                        <span className="me-2 ">Quantity: </span>
                        {!inputField ? (
                            <select
                                onChange={(e) => {
                                    modifyProduct(Number(e.target.value));
                                }}
                                className="form-select fw-semibold"
                                value={quantity}
                            >
                                {/* <option selected>Open this select menu</option> */}
                                {list.map((i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={i}
                                            className="fw-semibold"
                                        >
                                            {i}
                                        </option>
                                    );
                                })}
                                <hr />
                                <option className="fw-semibold">+10</option>
                            </select>
                        ) : (
                            <form
                                onSubmit={(e) => {
                                    priceEnter(e, Number(e.target.lastChild.value));
                                }}
                            >
                                <input
                                    type="text"
                                    className="form-control fw-semibold"
                                    name="quantity"
                                    onChange={(e) => {
                                        setInputValue(Number(e.target.value));
                                    }}
                                    value={inputValue}
                                />
                            </form>
                        )}{" "}
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
    quantity: PropTypes.number,
};
