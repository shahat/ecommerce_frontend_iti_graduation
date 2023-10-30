import { useEffect, useState } from 'react';
import './checkout.css'
const CheckOut = () => {
  let inputs 
  useEffect(() => {
    var bankForm = document.getElementById("bankForm");
    inputs = bankForm.querySelectorAll("input");
  }, []);
  const bankRadioFunc = (i)=>{

    console.log(i);
    if(i == "cash"){
      inputsDisabled();

    }else if(i == "bank"){
      inputsEnabled();

    }
  }

  const inputsDisabled = ()=>{
    for (let i = 0 ; i < inputs.length; i++){
      inputs[i].disabled = true;
      console.log(inputs[i].disabled);
  }
  }

  const inputsEnabled = ()=>{
    for (let i = 0 ; i < inputs.length; i++){
      inputs[i].disabled = false;
      console.log(inputs[i].disabled);

  }    
  }

  return (
    <div id="billing-details" className="container p-1">
        <h2>
            Billing Details
        </h2>
        <form >
            <div className="row p-0 m-0 justify-content-between">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-1 m-0" id="bankForm">
                    <label htmlFor="firstName">
                        First Name<span>*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" />
                    <label htmlFor="companyName">
                        Company Name
                    </label>
                    <input type="text" id="companyName" name="companyName" />
                    <label htmlFor="streetAddress">
                        Street Address<span>*</span>
                    </label>
                    <input type="text" id="streetAddress" name="streetAddress" />
                    <label htmlFor="Apartment">
                        Apartment, floor, etc. (optional)
                    </label>
                    <input type="text" id="Apartment" name="Apartment" />
                    <label htmlFor="townCity">
                        Town/City<span>*</span>
                    </label>
                    <input type="text" id="townCity" name="townCity" />
                    <label htmlFor="phoneNumber">
                        Phone Number<span>*</span>
                    </label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" />
                    <label htmlFor="e-mail">
                        E-mail address<span>*</span>
                    </label>
                    <input type="email" id="e-mail" name="e-mail" />

                    <div className="form-check p-0 my-1">
                        <input className="form-check-input" type="checkbox" value="" id="save-info" name="save-info" />
                        <label className="form-check-label" htmlFor="save-info">
                            Save this information for faster check-out next time
                        </label>
                    </div>

                    



                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-1 m-0 mt-sm-3 mt-md-0  ">
                    <ul id="billingItems" className="p-0 m-0 my-3">
                        <li className="row p-0 m-0 justify-content-between ">
                            <div className="col-3 ">
                                <img src="../../public/1.png" alt="" />
                            </div>
                            <div className="col-6 ">
                                <p>
                                    H1 Gamepad
                                </p>
                            </div>
                            <div className="col-3 ">
                                <span>
                                    $650
                                </span>
                            </div>
                        </li>
                        <li className="row p-0 m-0 justify-content-between ">
                            <div className="col-3 ">
                                <img src="../../public/2.png" alt="" />
                            </div>
                            <div className="col-6 ">
                                <p>
                                    LCD Monitor
                                </p>
                            </div>
                            <div className="col-3 ">
                                <span>
                                    $1100
                                </span>
                            </div>
                        </li>
                    </ul>
                    <ul id="paymentsMethod" className="p-0 m-0 my-3">
                        <li className="row p-0 m-0 justify-content-start ">
                            <div className="col-2 " >
                                <input type="radio" name="paymentMethod" id="cashOnDelivery"  onChange={()=>bankRadioFunc("cash")}/>
                            </div>
                            <div className="col-5 ">
                                <label htmlFor="cashOnDelivery">
                                    Cash on delivery
                                </label>
                            </div>
                        </li>
                        <li className="row p-0 m-0 justify-content-start ">
                            <div className="col-2 ">
                                <input type="radio" name="paymentMethod" id="bankRadio" onChange={()=>bankRadioFunc("bank")} />
                            </div>
                            <div className="col-5 ">
                                <label htmlFor="bankRadio">
                                    Bank
                                </label>
                            </div>
                            <div className="col-5 p-0">
                                <img src="../../public/bkash.png" alt="" />
                                <img src="../../public/visa.png" alt="" />
                                <img src="../../public/mastercard.png" alt="" />
                                <img src="../../public/pay.png" alt="" />

                            </div>
                        </li>
                    </ul>
                    <ul id="billingPrice" className="p-0 m-0 my-3">
                        <li className="row m-0 p-0 justify-content-between">
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Subtotal:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    $1750
                                </p>
                            </div>
                        </li>
                        <li className="row m-0 p-0 justify-content-between">
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Shipping:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    Free
                                </p>
                            </div>
                        </li>
                        <li className="row m-0 p-0 justify-content-between">
                            <div className="col-6 text-start p-0 m-0">
                                <p>
                                    Total:
                                </p>
                            </div>
                            <div className="col-6 text-end p-0 m-0">
                                <p>
                                    $1750
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div id="coupon" className="row p-0 m-0 justify-content-around my-3 " >
                        <div className="col-6">
                            <input type="text" name="coupon"   placeholder="Coupon Code" style={{height : "40px"}} />
                        </div>
                        <div className="col-6">
                            <button type="button">
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                    <input type="submit" value="Place Order" />
                </div>
            </div>
        </form>

    </div>
  );
}

export default CheckOut;
