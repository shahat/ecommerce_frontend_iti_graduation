import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/150x80 logo.png";
import style from "./resetCode.module.css";
import axios from "axios";

function ResetCode() {
  const [enteredCode, setEnteredCode] = useState(0);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/resetCode", {
        enteredCode,
      });
      console.log(response);
    } catch (error) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
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
          <h4 className="p-1 mb-4">Reset Password</h4>
          <p>Enter received code below</p>
          <div className="formElements ">
            <form
              className=""
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="resetCode">
                <label htmlFor="resetCode" />
                <input
                  onChange={(e) => {
                    setEnteredCode(e.target.value);
                  }}
                  className="form-control px-4 "
                  placeholder="Code"
                  type="text"
                  id="resetCode"
                />
              </div>

              <div className="d-flex  align-items-center justify-content-between ">
                <button
                  type="submit"
                  className={` form-control mt-4 text-white ${style.sendCodeBtn}`}
                >
                  Verify Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetCode;
