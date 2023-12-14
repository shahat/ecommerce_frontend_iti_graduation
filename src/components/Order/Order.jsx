import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { oneOrderAction } from "../../store/slices/order";
import { json, useParams, useNavigate } from "react-router-dom";
import { RiCustomerService2Line, RiLoopRightFill } from "react-icons/ri";
import axios from "axios";

function Order() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.oneOrder.oneOrder);
  console.log("this is the order =>>>>>>>>>>>>>>>>>>>>>>>", order);
  const date = new Date(order.createdAt);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(oneOrderAction(id));
  }, []);

  order && console.log(" this is the order from order ", order);

  return !order.shippingAddress ? (
    <div className="container" aria-hidden="true">
      <h2 className="h2 my-3">Review your order</h2>
      <div className="row justify-content-around align-items-center">
        <div className="col-12">
          <div className="row justify-content-around align-items-top">
            <div className="col-4">
              <h5 className="h5 my-2">Shipping Address</h5>
              <p className="lead m-0 placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
              <p className="lead m-0 placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
              <p className="lead m-0 placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
              <p className="lead m-0 placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
            </div>
            <div className="col-4">
              <h5 className="h5 my-2">Order Placed At :</h5>
              <p className="lead placeholder-glow">
                <span className="placeholder col-6"></span>
              </p>
              <h5 className="h5 my-2">Order Price :</h5>
              <p className="lead placeholder-glow">
                <span className="placeholder col-3"></span>
              </p>
            </div>
            <div className="col-4">
              <h5 className="h5 my-2">Order Status :</h5>
              <p className="lead placeholder-glow">
                <span className="placeholder col-3"></span>
              </p>
              <h5 className="h5 my-2">Order Payment Status :</h5>
              <p className="lead placeholder-glow">
                <span className="placeholder col-3"></span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-12 my-2">
          <button
            className="btn btn-outline-primary me-1 placeholder "
            aria-disabled="true"
            disabled
          >
            Order Again <RiLoopRightFill />
          </button>
          <button
            className="btn btn-outline-primary mx-1 placeholder "
            aria-disabled="true"
            disabled
          >
            Contact Support <RiCustomerService2Line />
          </button>
        </div> */}
        <div
          className="row justify-content-around align-items-center"
          aria-hidden="true"
        >
          <div className="col-3 ">
            <img src="..." className="card-img-top" alt="" />
            <p className="lead placeholder-glow">
              <span className="placeholder col-5"></span>
            </p>
          </div>
          <div className="col-3">
            <h5 className="h5 my-2">Product Price:</h5>
            <p className="lead placeholder-glow">
              <span className="placeholder col-3"></span>
            </p>
            <h5 className="h5 my-2">Rating :</h5>
            <p className="lead placeholder-glow">
              <span className="placeholder col-3"></span>
            </p>
          </div>
          <div className="col-3">
            <h5 className="h5 my-2">Description</h5>
            <p className="lead placeholder-glow">
              <span className="placeholder col-9"></span>
            </p>
          </div>
          <div className="col-3 text-center">
            <button
              className="btn btn-outline-success"
              // onClick={() => {
              //   navigate(`/products/${item._id}`);
              // }}
            >
              View Product
            </button>
          </div>
        </div>
        <div className="col-12 my-2"></div>
      </div>
    </div>
  ) : (
    <div className="container">
      <h2 className="h2 my-3">Review your order</h2>
      <div className="row justify-content-around align-items-center">
        <div className="col-12">
          <div className="row justify-content-around align-items-top">
            <div className="col-4">
              <h5 className="h5 my-2">Shipping Address</h5>
              <p className="lead m-0">
                street : {order.shippingAddress.street}
              </p>
              <p className="lead m-0">area : {order.shippingAddress.area}</p>
              <p className="lead m-0">city : {order.shippingAddress.city}</p>
              <p className="lead m-0">
                country : {order.shippingAddress.country}
              </p>
            </div>
            <div className="col-4">
              <h5 className="h5 my-2">Order Placed At :</h5>
              <p className="lead">{date.toDateString()}</p>
              <h5 className="h5 my-2">Order Price :</h5>
              <p className="lead">{order.amount}</p>
            </div>
            <div className="col-4">
              <h5 className="h5 my-2">Order Status :</h5>
              <p className="lead">{order.status}</p>
              <h5 className="h5 my-2">Order Payment Status :</h5>
              <p className="lead">{order.paymentStatus}</p>
            </div>
          </div>
        </div>

        {order.items &&
          order.items.length > 0 &&
          order.items.map((item, index) => (
            <div
              className="col-12 my-1 border bg-white d-flex justify-content-center align-items-center"
              key={index}
            >
              <div className="row justify-content-around align-items-center">
                <div className="col-md-3 ">
                  <img
                    src={item.thumbnail}
                    className="img-fluid  w-100 w-md-50 "
                    alt=""
                  />
                  <p className="lead">{item.title}</p>
                </div>
                <div className="col-md-3">
                  <h5 className="h5 my-2">Product Price:</h5>
                  <p className="lead">{item.price}</p>
                  <h5 className="h5 my-2">Rating :</h5>
                  <p className="lead">{item.rating}</p>
                </div>
                <div className="col-md-3">
                  <h5 className="h5 my-2">Description</h5>
                  <p className="lead">{item.description}</p>
                </div>
                <div className="col-md-3 text-center">
                  <button
                    className="btn btn-outline-warning w-50 m-3"
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        <div className="col-12 my-2"></div>
      </div>
    </div>
  );
}

export default Order;
