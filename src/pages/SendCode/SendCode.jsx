import React, { useState } from "react";
import style from "./sendCode.module.css";
import image from "../../assets/images/150x80 logo.png";
import { useNavigate } from "react-router-dom";
import { sendRecoveryCode } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";

function SendCode() {
  const [email, setEmail] = useState("");
  const [error,setError]=useState(false);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
     const response = await sendRecoveryCode({ email });
    //  console.log(response);
     toast.success(response.data.message,{position:'top-center'})
     setTimeout(() => {
       navigate("/resetCode");
     }, 2000);
   } catch (error) {
     if (error.response) {
       const errorMessage = error.response.data.message;
       toast.error(errorMessage,{position:'top-center'});

      if(email.length == 0 ){
        setError(true)
      }
     }
   }
  };

 

  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          src={image}
          className={`${style.logoImage}`}
          onClick={navigateToHome}
        />
      </div>
      <div
        className={`d-flex justify-content-center  align-items-center  ${style.mainRecovery}`}
      >
        <div
          className={`col-sm-12 col-md-4 col-lg-5 col-xl-4 py-5 border rounded   d-flex flex-column justify-content-center align-items-center ${style.recoveryCode}`}
        >
          <h4 className="p-1 mb-4">To Reset Password</h4>
          <p>Enter your email below</p>
          <div className="formElements ">
            <form
              className=""
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="userNameInfo">
                <label htmlFor="username" />
                <input
                  className="form-control px-4 "
                  placeholder="email"
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {error && (
                <p className="text-danger">
                  Email field cannot be empty
                </p>
              )}

              <div className="d-flex  align-items-center justify-content-between ">
                <button
                  type="submit"
                  className={` form-control mt-4 text-white ${style.sendCodeBtn}`}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SendCode;
