import { useEffect, useState } from 'react';
import styles from './checkout.module.css'
import { useSelector , useDispatch } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import { BsPlusSquareDotted } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { userAction, userAddressPostAction } from "../../store/slices/user";
import { getAddress, userAddressGetAction } from '../../store/slices/userAddress';
import { changeTotal, setDiscount, setSubTotal } from '../../store/slices/checkOut';
import axios from 'axios';
import { postOneOrder } from '../../store/slices/order';
import { deleteCart } from '../../store/slices/cart';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const user = useSelector((state)=> state.user.user)
    const userAddresses = useSelector((state)=> state.address.address)
    const userCart = useSelector((state)=> state.cart.cartProducts)
    const userCheckoutPrice = useSelector((state)=> state.checkOut)
    const addressValue = userAddresses?.length;
    const [newAddress , setAddress] = useState({
        country:"",
        fullName:"",
        phoneNumber:"",
        city:"",
        area:"",
        zipCode:"",
        street:"",
        building:"",
        floor:"",
        apartment:"",
        extraDetails:""
    })

    const [sentAddress , setShippingAddress] = useState({
        id:""
    })
    const [sentItems , setSentItems] = useState([])
    const [bankCard , setBankCard] = useState({
        cardNumber:"",
        cardHolder:"",
        expires:"",
        cvc:""
    })

    const [order , setOrder] = useState({
    })

    const [pricing , setPricing] = useState({
        subTotal : 0,
        discount : 0,
        delivery : 0,
        total:0
    })

    const [couponValue , setCoupon ] =useState({
        coupon : "",
        valid : false,
        discount : 0
    })
    const [cardIsValid , setCardValidation] = useState(false)
    const [payCash , setPayCash] = useState(true)
    



  useEffect(() => {
    handlingPrice()
    

  }, [userCart , userCheckoutPrice]);


    const handlingPrice = ()=>{
        let subtotal = 0;
        let items = []
        for(let i = 0 ; i < userCart.length;i++){
            let prdPrice = userCart[i].priceWhenAdded;
            let prdQun = userCart[i].quantity;
            subtotal = subtotal + (prdPrice * prdQun) 
            let prd = {
                productId : userCart[i]._id._id,
                quantity : userCart[i].quantity,
                price : userCart[i].priceWhenAdded,
            }
            items.push(prd);
            // setSentItems(sentItems => [...sentItems, {productId:userCart[i]._id._id ,quantity:userCart[i].quantity ,price:userCart[i].priceWhenAdded}])
        }
        console.log(items);
        setPricing({...pricing , subTotal:subtotal})
        console.log(subtotal);
        dispatch(setSubTotal(subtotal))
        dispatch(changeTotal())
        setOrder({...order, userId:user._id ,amount:userCheckoutPrice.total , items:items , paymentStatus:"Cash on delivery", status : "Waiting for Supplier" })

    }


    const inputChange = (e)=>{
        setAddress({...newAddress , [e.target.name]:e.target.value})
    }

    const addressFormSubmit = (e)=>{
        e.preventDefault();

        const sentAddress = [{id : user._id},[...userAddresses,{...newAddress}]]

        dispatch(getAddress(sentAddress ,user._id ))
        console.log(sentAddress);


    }

    const bankInputChange = (e)=>{
        setBankCard({bankCard , [e.target.name]:e.target.value})
    }

    const paymentFormSubmit = (e) => {
        e.preventDefault();
        // check card information and make validtion in cardIsValid variable
        // if(true){
        //     setOrder({...order, paymentStatus:"Paid Online" })
        // }
        // else{
        //     setOrder({...order, paymentStatus:"Cash on delivery" })

        // }

    }


    const couponInputChange = (e)=>{
        setCoupon({...couponValue , coupon:e.target.value})
    }
    const checkCoupon = async ()=>{
        try{
            const res = await axios.get(`http://localhost:4000/coupon/${couponValue.coupon}`)
            dispatch(setDiscount(res.data))
            setCoupon({...couponValue , valid:true})

            toast.success("valid coupon", {
                position: "top-center",
            });
        }
        catch(err){
            console.log(err);
            toast.error("invalid coupon", {
                position: "top-center",
            });
            setCoupon({...couponValue , coupon:"", valid:false})

        }
    }


    const orderInputChange= (e) => {
        console.log(e.target.value);
        
        setOrder({...order, shippingAddress:userAddresses[e.target.value] })


    }
    const orderFormSubmit = (e) => {
        e.preventDefault();
        console.log(sentAddress.id);
        
        console.log({...order});
        dispatch(postOneOrder(order))
        dispatch(deleteCart(user._id))
        navigate(`/`)

    }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bankShow, setBankShow] = useState(false);

  const handleBankModalClose = () => {
    setBankShow(false)
    if(cardIsValid){
        setPayCash(false)
    }
    else{
        setPayCash(true)

    }
    
};
  const handleBankModalShow = () => setBankShow(true);
  return (
    <div id="billing-details" className="container p-1">
        <h2>
            Billing Details
        </h2>
        <form onSubmit={(e)=>{orderFormSubmit(e)}}>
            <div className="row p-0 m-0 justify-content-between">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-0 m-0" id='checkoutAddressBook'>
                   <div className="row p-0 m-0 justify-content-center align-items-top gy-1">
                        <div className="col-8 p-0">
                            <h4 className="h4">
                                Choose you Shipping Address
                            </h4>
                        </div>
                        <div className="col-4">
                            {(addressValue)?<button className='btn btn-primary btn-sm' type='button' onClick={handleShow} >
                                Add New <FaPlus />
                            </button>:<></>}
                            <Modal show={show} onHide={handleClose} size="lg" keyboard={false} backdrop="static" centered> 
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Form onSubmit={(e) => {addressFormSubmit(e)}}>
                                <Modal.Body>
                                    <div className="row justify-content-around align-items-center gy-2">
                                        <div className="col-12">
                                                <label htmlFor="newAddressRegion" className="form-label">Country/Region</label>
                                                <input type="text" className="form-control" id="newAddressRegion" name="country" autoFocus  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-12">
                                                <label htmlFor="newAddressFullName" className="form-label">Full Name</label>
                                                <input type="text" className="form-control" id="newAddressFullName" name="fullName"  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-12">
                                                <label htmlFor="newAddressPhoneNumber" className="form-label">Phone number</label>
                                                <input type="tel" className="form-control" id="newAddressPhoneNumber" name="phoneNumber"  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-5">
                                            <label htmlFor="newAddressCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="newAddressCity" name="city" value={newAddress.city}  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="newAddressArea" className="form-label">Area</label>
                                            <input type="text" className="form-control" id="newAddressArea" name="area" value={newAddress.area}  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="newAddressZipCode" className="form-label">ZIP Code</label>
                                            <input type="number" className="form-control" id="newAddressZipCode" name="zipCode" value={newAddress.zipCode} onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="newAddressStreet" className="form-label">Street</label>
                                            <input type="text" className="form-control" id="newAddressStreet" name="street" value={newAddress.street} onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-5">
                                            <label htmlFor="newAddressBuilding" className="form-label">Building</label>
                                            <input type="text" className="form-control" id="newAddressBuilding" name="building" value={newAddress.building}  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="newAddressFloor" className="form-label">Floor</label>
                                            <input type="number" className="form-control" id="newAddressFloor" name="floor" value={newAddress.floor}  onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="newAddressApartment" className="form-label">Apartment</label>
                                            <input type="number" className="form-control" id="newAddressApartment" name="apartment" value={newAddress.apartment} onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="newAddressDetails" className="form-label">Extra Details</label>
                                            <textarea className="form-control" id="newAddressDetails" name="extraDetails" value={newAddress.extraDetails} onChange={(e) => {inputChange(e)}}/>
                                        </div>
                                                    
                                    </div>
                                
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                                </Form>
                            </Modal>
                        </div>
                        {(addressValue)?<>
                            {userAddresses.map((address , index)=>(
                                <div className="col-12" key={address._id} >
                                <div className="card p-2">
                                    <div className="row justify-content-around align-items-top m-0 ">
                                        
                                        <div className="col-5 ">
                                            <p className="fs-6 my-0 lead">
                                                Name : {address.fullName}
                                            </p>
                                            <p className="fs-6 my-0 lead">
                                                Phone : {address.phoneNumber}
                                            </p>
                                            <p className="fs-6 my-0 lead">
                                            </p>
                                        </div>
                                        <div className="col-5 ">
                                            <p className="fs-6 my-0 lead">
                                                {address.city} , {address.country}
                                            </p>
                                            <p className="fs-6 my-0 lead">
                                                {address.area} , {address.street}
                                            </p>
                                            <p className="fs-6 my-0 lead">
                                                Building {address.building} , Floor {address.floor}
                                            </p>
                                        </div>
                                        <div className="col-2 text-center">
                                            <input type="radio" name="shippingAddress" id="" value={index}  required onChange={(e) => {orderInputChange(e)}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </>:<>
                            <div className="col-12 p-0 text-center">
                            <div className="card p-2 " >
                                    <div className="row justify-content-around align-items-center m-0 " style={{height: "100px"}}>  
                                        <div className="col-12">
                                            <button className='btn btn-outline-primary' type='button' onClick={handleShow}    >
                                               Add an address now <BsPlusSquareDotted />

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                   </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-1 m-0 mt-sm-3 mt-md-0  ">
                    <ul id="billingItems" className="p-0 m-0 my-3">
                         {
                            (userCart.map((prd , index)=>(
                                <div className='row p-0 m-0 justify-content-between w-100' key={index} style={{height:"60px"}}>
                                    <div className="col-3 ">
                                        <img src={prd._id.thumbnail} alt=""  className={`${styles.checkoutPrdImg}`}/>
                                    </div>
                                    <div className="col-6 ">
                                        <p className={`${styles.checkoutPrdText} text-center`}>
                                            {prd._id.title}
                                        </p>
                                    </div>
                                    <div className="col-3 ">
                                        <span className={`${styles.checkoutPrdText} text-end`}>
                                            {prd.quantity}x ${prd.priceWhenAdded}
                                        </span>
                                    </div>
                                </div>
                            )))
                         }       
                    </ul>
                    <ul id="paymentsMethod" className="p-0 m-0 my-3">
                        <li className={`row p-0 m-0 justify-content-start ${styles.paymentsMethodContainer}` }>
                            <div className={`col-2 ${styles.paymentsMethodInputContainer}`} >
                                <input type="radio" className={`${styles.paymentsMethodInput}`} name="paymentStatus" id="cashOnDelivery" value={`Cash On delivery`}  required checked={payCash} onChange={(e) => {orderInputChange(e)}}/>
                            </div>
                            <div className="col-5 ">
                                <label htmlFor="cashOnDelivery" className={`${styles.paymentsMethodLabel}`}>
                                    Cash on delivery
                                </label>
                            </div>
                        </li>
                        <li className="row p-0 m-0 justify-content-start ">
                            <div className="col-2 ">
                                <input type="radio" className={`${styles.paymentsMethodInput}`} name="paymentStatus" id="bankRadio" value={`Paid Online`} onClick={handleBankModalShow} onChange={(e) => {orderInputChange(e)}} required checked={!payCash}/>
                            </div>
                            <Modal show={bankShow} onHide={handleBankModalClose} size="lg" keyboard={false} backdrop="static" centered> 
                                <Modal.Header closeButton>
                                <Modal.Title>Payment</Modal.Title>
                                </Modal.Header>
                                <Form onSubmit={(e) => {paymentFormSubmit(e)}}>
                                <Modal.Body>
                                    <div className="row justify-content-around align-items-center gy-2">
                                        <div className="col-12">
                                                <label htmlFor="newCardNumber" className="form-label">Card Number</label>
                                                <input type="text" className="form-control" id="newCardNumber" name="cardNumber" value={bankCard.cardNumber} autoFocus  onChange={(e) => {bankInputChange(e)}} maxLength={16}/>
                                        </div>
                                        <div className="col-12">
                                                <label htmlFor="newCardHolder" className="form-label">Card Holder</label>
                                                <input type="text" className="form-control" id="newCardHolder" name="cardHolder" value={bankCard.cardHolder}  onChange={(e) => {bankInputChange(e)}}/>
                                        </div>
                                        <div className="col-8">
                                                <label htmlFor="newCardExpires" className="form-label">Expires</label>
                                                <input type="text" className="form-control" id="newCardExpires" name="expires" value={bankCard.expires}  onChange={(e) => {bankInputChange(e)}}/>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="newCardCVC" className="form-label">CVC</label>
                                            <input type="text" className="form-control" id="newCardCVC" name="cvc" value={bankCard.cvc} onChange={(e) => {bankInputChange(e)}}/>
                                        </div>
                                                    
                                    </div>
                                
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleBankModalClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit" onClick={handleBankModalClose}>
                                    Place Order
                                </Button>
                                </Modal.Footer>
                                </Form>
                            </Modal>
                            <div className="col-5 ">
                                <label htmlFor="bankRadio" className={`${styles.paymentsMethodLabel}`}>
                                    Bank
                                </label>
                            </div>
                            <div className="col-5 p-0">
                                <img src="../../public/bkash.png" alt="" className={`${styles.paymentsMethodImg}`}/>
                                <img src="../../public/visa.png" alt="" className={`${styles.paymentsMethodImg}`}/>
                                <img src="../../public/mastercard.png" alt="" className={`${styles.paymentsMethodImg}`}/>
                                <img src="../../public/pay.png" alt="" className={`${styles.paymentsMethodImg}`}/>

                            </div>
                        </li>
                    </ul>
                    <ul id="billingPrice" className="p-0 m-0 my-3">
                        <li className={`row m-0 p-0 justify-content-between ${styles.billingPriceContainer}`} >
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Subtotal:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    ${userCheckoutPrice.subTotal}
                                </p>
                            </div>
                        </li>
                        <li className={`row m-0 p-0 justify-content-between ${styles.billingPriceContainer}`}>
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Shipping:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    ${userCheckoutPrice.delivery}
                                </p>
                            </div>
                        </li>
                        {(couponValue.valid)?<li className={`row m-0 p-0 justify-content-between ${styles.billingPriceContainer}`}>
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Discount:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    ${userCheckoutPrice.discount}
                                </p>
                            </div>
                        </li>:<></>}
                        <li className={`row m-0 p-0 justify-content-between ${styles.billingPriceContainer}`} style={{borderBottomWidth: "0px" }}>
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Total:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    ${userCheckoutPrice.total}
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div  className={`row p-0 m-0 justify-content-around my-3 ${styles.coupon}`} >
                        <div className="col-6">
                            <input type="text" name="coupon" value={couponValue.coupon} onChange={(e)=>{couponInputChange(e)}}    className={` form -control ${styles.couponButtonInput}`}   placeholder="Coupon Code" style={{height : "40px"}}  />
                        </div>
                        <div className="col-6">
                            <button type="button" className={`${styles.couponButtonInput} ${styles.couponButton}`} onClick={()=>{checkCoupon()}}>
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                    <input type="submit" value="Place Order" className={`${styles.formSubmitInput}`}/>
                </div>
            </div>
        </form> 
        <Toaster />

    </div>
  );
}

export default CheckOut;
