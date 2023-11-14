import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/150x80 logo.png";
import style from "./resetPassword.module.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { authContext } from "../../contexts/authContext";
import { enterResetPassword } from "../../Services/auth";

function ResetPass() {
  const { enteredCode } = useContext(authContext);

  const [userPassword, setUserPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handlePassword = (e) => {
    if (e.target.name === "password") {
      setUserPassword({ ...userPassword, password: e.target.value });
    } else {
      setUserPassword({ ...userPassword, confirmPassword: e.target.value });
    }
  };

  const navigateToLogin = async () => {
    try {
      const response = await enterResetPassword({ userPassword, enteredCode });
      console.log(response);
      toast.success(response.data.message, { position: "top-center" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const errorMessage = error.response.data.message;
      toast.error(errorMessage, { position: "top-center" });
    }
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
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div
        className={`d-flex justify-content-center  align-items-center  ${style.mainPass}`}
      >
        <div
          className={`col-sm-12 col-md-4 col-lg-5 col-xl-4 py-5 border rounded  d-flex flex-column justify-content-center align-items-center ${style.mainDivShadow}`}
        >
          <h4 className="p-1 mb-4">Reset Password</h4>
          <div className="formElements ">
            <form
              className=""
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="passwordConfirmation">
                <input
                  onChange={(e) => {
                    handlePassword(e);
                  }}
                  name="password"
                  className={`form-control px-4  `}
                  placeholder="Password"
                  type="password"
                  id="passwordRecovery"
                  value={userPassword.password}
                />
              </div>

              <div className="passwordConfirmation">
                <input
                  onChange={(e) => {
                    handlePassword(e);
                  }}
                  name="confirmPassword"
                  className="form-control mt-4 px-4 "
                  placeholder="Confirm Password"
                  type="password"
                  id="confirmPassRecovery"
                  value={userPassword.confirmPassword}
                />
              </div>
              <div className="d-flex  align-items-center justify-content-between ">
                <button
                  onClick={() => {
                    navigateToLogin();
                  }}
                  type="button"
                  className={` form-control mt-4 text-white ${style.confirmPassword}`}
                >
                  Reset Password
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

export default ResetPass;
