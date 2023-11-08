import { useSelector , useDispatch } from "react-redux";
import AnimatedPage from "../animtedPage/AnimatedPage";
import { useEffect } from "react";
import { useNavigate  } from 'react-router-dom';

import { orderAction } from '../../store/slices/orders';
const UserComingOrders = () => {
    const orders = useSelector((state)=> state.orders.orders)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(orderAction())
    },[])
    console.log(orders);

   
    return (
        <>
            <AnimatedPage>
                <div className="row justify-content-center align-items-center p-1 m-0 gy-1">
                {orders.map((order , index)=>(

                    <div className="col-12" key={order._id} onClick={() => {navigate(`/Order/${order._id}`)}}>

                        <div className="card"  >
                            <div className="card-body">
                                        <div className="row justify-content-around align-items-center text-center">
                                            <div className="col-4">
                                                <p className="lead">
                                                    Address  <br/> {order.shippingAddress.street}
                                                </p>
                                            </div>
                                            <div className="col-4">
                                                <p className="lead">
                                                    Price <br/>{order.amount}
                                                </p>
                                            </div>
                                            <div className="col-4">
                                                <p className="lead">
                                                    Payment Status <br/>
                                                    {order.paymentStatus}
                                                </p>
                                            </div>
                                        </div>
                                    
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </AnimatedPage>
        </>
    );
}

export default UserComingOrders;
