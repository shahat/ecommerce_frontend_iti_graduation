import CartProduct from "../../components/cartComponents/cartProduct";
import css from "../../assets/style/product.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Loader from "../../components/Loader/loader";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../store/slices/cart";
import CartTitle from "../../components/cartTitle/CartTitle";
function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.cart.loading);
  const cartList = useSelector((state) => state.cart.cartProducts);
  const checkOutStatus = useSelector((state) => state.checkOut);
  const token = localStorage.getItem("token");
  console.log("this is the token", token);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setSubTotal(0);
    cartList &&
      cartList.forEach((element) => {
        setSubTotal(
          (previous) => previous + element.priceWhenAdded * element.quantity
        );
      });
  }, [cartList]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="d-flex row justify-content-center col-12 m-0 ">
          <CartTitle title="CART" />

          <div
            className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}
          >
            {/* <!-- Cart-Products PART --> */}
            <div
              className={`${css["cart_products"]} ${
                cartList ? "col-md-7 col-11" : "w-100"
              } 
              border rounded-1 p-4 d-flex flex-column bg-white`}
            >
              {cartList && cartList.length > 0 ? (
                cartList.map((prod, index) => {
                  return (
                    <>
                      <CartProduct
                        key={index}
                        product={prod}
                        quantity={prod.quantity}
                      />
                      {index < cartList.length - 1 && (
                        <hr className="my-4 w-100" />
                      )}
                    </>
                  );
                })
              ) : (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center fw-semibold">
                    Your cart is empty!
                  </h3>
                  <button
                    className={`btn ${css.apply} ${css.myBtn} bg-warning col-3 my-1 text-dark`}
                    style={{}}
                  >
                    Go Shopping{" "}
                  </button>
                </div>
              )}
            </div>

            {cartList && (
              <div
                className={`${css["checkout_details"]} col-xs-12 bg-white p-4 align-content-between border rounded-1`}
              >
                <div className="">
                  <header>
                    <h3 className="fw-semibold w-100 text-center text-upperCase">
                      Order Summary
                    </h3>
                  </header>
                  <div className="order_details mt-5 d-flex flex-column align-content-between">
                    <div
                      className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                    >
                      <p className="fs-5 text-muted">Subtotal</p>
                      <h5>{subTotal} EGP</h5>
                    </div>
                    <div
                      className={`${css["order_info"]} d-flex justify-content-between flex-sm-column flex-lg-row`}
                    >
                      <p className="fs-5 text-muted">
                        Discount <span className="fs-6">(0%)</span>
                      </p>
                      <h5 className="text-danger">
                        - {checkOutStatus.discount}{" "}
                      </h5>
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
                      <h4> {subTotal} </h4>
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
                      className={`btn ${css.apply} ${css.myBtn} rounded-pill bg-warning text-dark`}
                    >
                      Apply
                    </button>
                    <Link
                      to={token ? "/checkout" : "/login"}
                      className={`${css.goToCheck} btn ${css.myBtn} rounded-pill text-decoration-none col-12 mt-4 p-3 fs-3 bg-warning text-dark`}
                    >
                      {token ? "Go to Checkout" : "Login To Checkout "}
                      <FaArrowRight className="ms-3 fs-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`${css.discount} d-flex col-12 mt-5 justify-content-center`}
            >
              {cartList && (
                <button
                  className="btn rounded-pill col-md-3 col-8 mt-4 p-2 fs-6 bg-danger"
                  onClick={() => {
                    dispatch(deleteCart(user._id));
                  }}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
          <div id="contact-footer"></div>
        </div>
      )}
    </>
  );
}

export default Cart;
