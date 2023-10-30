import { useState } from "react";
import CartProduct from "../../components/cartComponents/cartProduct";
import RelatedProducts from "../../components/relatedProducts/relatedProducts"
// import css from "./cart.module.css";
import css from "../../assets/style/product.module.css";

function Cart() {
    const [products, setProducts] = useState([
      "src/assets/images/wish-list/shirt.png",
      "src/assets/images/wish-list/t-shirt.jpeg",
      "src/assets/images/wish-list/tra.jpeg",
  ]);

    return (
        <>
            <div className="d-flex row justify-content-center col-12 m-0">
                <h1 className="col-12 fw-bolder m-5 text-center">Your Cart</h1>
                {/* <!-- CART PART --> */}
                <div className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}>
                    {/* <!-- Cart-Products PART --> */}
                    <div
                        className={`${css["cart_products"]} col-md-7 col-11 border rounded-4 p-4 d-flex flex-column bg-white`}
                    >
                        {products.map((prod, index) => {
                            return (
                                <>
                                    <CartProduct key={index} src={prod} />
                                    {index < products.length - 1 && (
                                        <hr className="my-4 w-100" />
                                    )}
                                </>
                            );
                        })}
                    </div>

                    {/* <!-- Checkout PART --> */}
                    <div
                        className={`${css["checkout_details"]} col-xs-12 p-4 align-content-between border rounded-4`}
                    >
                        <div className="">
                            <header>
                                <h3 className="fw-semibold">Order Summary</h3>
                            </header>
                            <div className="order_details mt-5 d-flex flex-column align-content-between">
                                <div
                                    className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                                >
                                    <p className="fs-5 text-muted">Subtotal</p>
                                    <h5>$565</h5>
                                </div>
                                <div
                                    className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                                >
                                    <p className="fs-5 text-muted">
                                        Discount{" "}
                                        <span className="fs-6">(-20%)</span>
                                    </p>
                                    <h5 className="text-danger">-$113</h5>
                                </div>
                                <div
                                    className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                                >
                                    <p className="fs-5 text-muted">
                                        Delivery Fee
                                    </p>
                                    <h5>$15</h5>
                                </div>
                                <hr />
                                <div
                                    className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                                >
                                    <p className="fs-4 text-muted">Total</p>
                                    <h4>$467</h4>
                                </div>
                            </div>
                            <div
                                className={`${css.discount} d-flex flex-xs-row flex-md-column flex-lg-row flex-column flex-wrap`}
                            >
                                <input
                                    type="text"
                                    className="btn rounded-pill col-md-8 col-sm-11 bg-secondary-subtle text-start"
                                    placeholder="Add Promo Code"
                                />
                                <div className={`col ${css.hide}`}></div>
                                <button
                                    className={`btn ${css.apply} ${css.myBtn} rounded-pill`}
                                >
                                    Apply
                                </button>
                                <button
                                    className={`${css.goToCheck} btn ${css.myBtn} rounded-pill col-12 mt-4 p-3 fs-6`}
                                >
                                    Go to Checkout
                                    <i className="fa-solid fa-arrow-right ms-3"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${css.discount} d-flex col-12 mt-5 justify-content-center`}
                    >
                        <button className="btn rounded-pill col-md-3 col-8 mt-4 p-2 fs-6 bg-danger">
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* <!-- Related Products PART --> */}
                <RelatedProducts     />

                <div id="contact-footer"></div>
            </div>
        </>
    );
}

export default Cart;

    