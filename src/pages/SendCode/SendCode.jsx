import React from "react";
import style from "./sendCode.module.css";
import { AiOutlineGoogle } from "react-icons/ai";
import image from "../../assets/images/150x80 logo.png";
import { useNavigate } from "react-router-dom";

function SendCode() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h4 className="p-1 mb-4">Reset Password</h4>
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
                  required
                />
              </div>

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
    </div>
  );
}

export default SendCode;
