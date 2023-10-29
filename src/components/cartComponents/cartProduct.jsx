import css from "../../pages/Cart/cart.module.css";
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

function cartProduct(props) {
    const [quantity, setQuantity] = useState(1);

    function inc() {
        setQuantity(quantity + 1);
    }
    function dec() {
        quantity > 1 && setQuantity(quantity - 1);
    }
    console.log("b");
    return (
        <>
            <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
                <div
                    className={`${css["cart_product_left"]} float-start d-flex col-9`}
                >
                    <div
                        className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1`}
                        style={{ width: "7.75rem", height: "7.75rem" }}
                    >
                        <img src={props.src} className="h-100 m-auto" />
                    </div>
                    <div
                        className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
                    >
                        <h4>Gradient Graphic T-shirt</h4>
                        <p>
                            Size: <span className="text-secondary">Large</span>
                        </p>
                        <p>
                            Color: <span className="text-secondary">Blue</span>
                        </p>
                        <h3 className="mt-auto mb-0">143$</h3>
                    </div>
                </div>
                <div
                    className={`${css["cart_product_right"]} d-flex align-items-end align-content-between col-3`}
                >
                    <button className="btn text-danger fs-5">
                        <FaTrash/>
                    </button>
                    <div className="d-flex">
                        <button
                            onClick={dec}
                            className={`${css.myBtn} rounded-0 rounded-start-5 w-25`}
                        >
                            <FaMinus />
                        </button>
                        <button type="" className="w-50 border bg-white px-4 fw-semibold">
                            {quantity}
                        </button>

                        <button
                            onClick={inc}
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

export default cartProduct;
