import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../animtedPage/AnimatedPage";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { pastOrdersAction } from "../../store/slices/orders";
import { userAction } from "../../store/slices/user";

const UserOrders = () => {
  let orders = useSelector((state) => state.orders.pastOrders);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let value = orders?.length;

  useEffect(() => {
    dispatch(pastOrdersAction(user._id));
    console.log(user);
    console.log(orders);
  }, [orders, user]);

  return (
    <>
      <AnimatedPage>
        <div className="row justify-content-center align-items-center p-1 m-0 gy-1">
          {value ? (
            <>
              {orders.map((order) => (
                <div
                  className="col-12"
                  key={order._id}
                  onClick={() => {
                    navigate(`/Order/${order._id}`);
                  }}
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="row justify-content-around align-items-center text-center">
                        <div className="col-4">
                          <p className="lead fs-1 ">Address</p> <br />
                          <span className="fs-6">
                            {order.shippingAddress.street}
                          </span>
                        </div>
                        <div className="col-4">
                          <p className="lead">
                            Price <br />
                            {order.amount}
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="lead">
                            Payment Status <br />
                            {order.paymentStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="col-12">
                <h3 className="h3 text-center">You didn't order yet!</h3>
              </div>
            </>
          )}
        </div>
      </AnimatedPage>
    </>
  );
};

export default UserOrders;
