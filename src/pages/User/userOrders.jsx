import { useSelector , useDispatch } from "react-redux";
import AnimatedPage from "../animtedPage/AnimatedPage";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'

import { ordersAction } from '../../store/slices/orders';
import { userAction } from '../../store/slices/user';



const UserOrders = () => {
    let orders = useSelector((state)=> state.orders.orders)
    const user = useSelector((state)=> state.user.user)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    useEffect(()=>{
        dispatch(userAction(userId))
        dispatch(ordersAction(userId))
        console.log(user);
        console.log(orders);

    },[])


   
    return (
        <>
            <AnimatedPage>

                
                <div className="row justify-content-center align-items-center p-1 m-0 gy-1">
                    {(orders)?<>{orders.map((order , index)=>(

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
                        ))}</>:<><div className="col-12">
                            <h3 className="h3 text-center">
                                You didn't order yet!
                            </h3>
                            
                        </div>
                        </>}
                    

                </div>
            </AnimatedPage>
        </>
    );
}

export default UserOrders;
