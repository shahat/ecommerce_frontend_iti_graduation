import CartProduct from "../../components/cartComponents/cartProduct";
import RelatedProducts from "../../components/relatedProducts/relatedProducts";
import css from "../../assets/style/product.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import { changeSubTotal } from "../../store/slices/checkOut";
// import { useEffect } from "react";

function Cart() {
  const cartList = useSelector((state) => state.cart.cartProducts);
  const checkOutStatus = useSelector((state) => state.checkOut);
  const token = localStorage.getItem("token");
  console.log("this is the cart list : ", cartList);
  console.log(checkOutStatus);

  return (
    <>
      <div className="d-flex row justify-content-center col-12 m-0">
        <h1 className="col-12 fw-bolder m-5 text-center">Your Cart</h1>
        {/* <!-- CART PART --> */}
        <div
          className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}
        >
          {/* <!-- Cart-Products PART --> */}
          <div
            className={`${css["cart_products"]} col-md-7 col-11 border rounded-4 p-4 d-flex flex-column bg-white`}
          >
            {cartList.length ? (
              cartList.map((prod, index) => {
                // sub(prod.priceWhenAdded * prod.quantity)
                return (
                  <>
                    <CartProduct key={index} product={prod} />
                    {index < cartList.length - 1 && (
                      <hr className="my-4 w-100" />
                    )}
                  </>
                );
              })
            ) : (
              <h3 className="text-center fw-semibold">Your cart is empty!</h3>
            )}
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
                  <h5>{checkOutStatus.subTotal} EGP</h5>
                </div>
                <div
                  className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                >
                  <p className="fs-5 text-muted">
                    Discount <span className="fs-6">(0%)</span>
                  </p>
                  <h5 className="text-danger">- {checkOutStatus.discount} </h5>
                </div>
                <div
                  className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                >
                  <p className="fs-5 text-muted">Delivery Fee</p>
                  <h5>{checkOutStatus.delivery} EGP</h5>
                </div>
                <hr />
                <div
                  className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                >
                  <p className="fs-4 text-muted">Total</p>
                  <h4> {checkOutStatus.total} </h4>
                </div>
              </div>
              <div
                className={`${css.discount} d-flex flex-xs-row flex-md-column flex-lg-row flex-column flex-wrap`}
              >
                <input
                  type="text"
                  className="border-0 px-3 text-dark rounded-pill col-md-8 col-sm-11 bg-secondary-subtle text-start"
                  placeholder="Add Promo Code"
                />
                <div className={`col ${css.hide}`}></div>
                <button
                  className={`btn ${css.apply} ${css.myBtn} rounded-pill`}
                >
                  Apply
                </button>
                <Link
                  to={token ? "/checkout" : ""}
                  className={`${css.goToCheck} btn ${css.myBtn} rounded-pill text-decoration-none col-12 mt-4 p-3 fs-3`}
                >
                  Go to Checkout
                  <FaArrowRight className="ms-3 fs-5" />
                </Link>
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
        <RelatedProducts />

        <div id="contact-footer"></div>
      </div>
    </>
  );
}

export default Cart;
