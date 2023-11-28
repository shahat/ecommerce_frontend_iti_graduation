import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../animtedPage/AnimatedPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { comingOrdersAction } from "../../store/slices/orders";
const UserComingOrders = () => {
  const user = useSelector((state) => state.user.user);
  const orders = useSelector((state) => state.orders.comingOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user coming orders", orders);

  let value = orders?.length;
  useEffect(() => {
    dispatch(comingOrdersAction(user._id));
    console.log(user);
    console.log(orders);
  }, []);

  return (
    <>
      {orders && orders.length > 0 ? (
        <AnimatedPage>
          <div className="row justify-content-center align-items-center p-1 m-0 gy-1 overflow-scroll">
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
                            <p className="lead">
                              Address <br /> {order.shippingAddress?.street}
                            </p>
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
                  <h3 className="h3 text-center">
                    You don't have any up-coming orders!
                  </h3>
                </div>
              </>
            )}
          </div>
        </AnimatedPage>
      ) : (
        <h1>the is no orders yet </h1>
      )}
    </>
  );
};

export default UserComingOrders;
