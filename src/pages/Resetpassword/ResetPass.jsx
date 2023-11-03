import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/150x80 logo.png";
import style from "./resetPassword.module.css";

function ResetPass() {
  const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const navigateToHome=()=>{
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    validatePassword();
  }, [firstPassword, secondPassword]);

  const handleFirstPassword = (e) => {
    setFirstPassword(e.target.value);
  };
  const handleSecondPassword = (e) => {
    setSecondPassword(e.target.value);
  };

  const validatePassword = () => {
    setPasswordError(
      !(passwordRegx.test(firstPassword) && passwordRegx.test(secondPassword))
    );
    if (formSubmitted) {
      setPasswordError(firstPassword !== secondPassword);
    }
  };

  const navigateToLogin = () => {
    setFormSubmitted(true);
    validatePassword();
    if (firstPassword === secondPassword) {
      navigate("/login");
      setPasswordError(false);
    } else {
      setPasswordError(true);
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
                    handleFirstPassword(e);
                  }}
                  name="firstPassword"
                  className="form-control px-4 "
                  placeholder="Password"
                  type="text"
                  id="passwordRecovery"
                  value={firstPassword}
                  required
                />
              </div>

              <div className="passwordConfirmation">
                <input
                  onChange={(e) => {
                    handleSecondPassword(e);
                  }}
                  className="form-control mt-4 px-4 "
                  placeholder="Confirm Password"
                  type="text"
                  id="confirmPassRecovery"
                  value={secondPassword}
                  required
                />
              </div>
              {formSubmitted && passwordError ? (
                <p className="text-danger">Sorry, Password does not match</p>
              ) : (
                ""
              )}

              <div className="d-flex  align-items-center justify-content-between ">
                <button
                  onClick={() => {
                    navigateToLogin();
                  }}
                  type="submit"
                  className={` form-control mt-4 text-white ${style.confirmPassword}`}
                >
                  Confirm Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
