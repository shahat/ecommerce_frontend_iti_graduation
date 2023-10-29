import React from "react";
import style from "./login.module.css";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Login() {
  const navgiate = useNavigate();

  const navigateResetPass =()=>{
    navgiate('/resetPassword');
  }
  const navigateToRegister =()=>{
    navgiate('/register');
  }
  const navigateToHome = ()=>{
    navgiate('/home')
  }
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div
          className={`col-md-6  col-sm-10  vh-80 mt-4 p-5 d-flex flex-column justify-content-center ${style.loginInformation}`}
        >
          <h4 className="text-center">LOGIN</h4>
          <p className="text-center">
            If you don't have account please
            <a
              onClick={navigateToRegister}
              className={`text-decoration-none border-0 border-bottom ms-2 ${style.register}`}
            >
              Register
            </a>
          </p>
          <form action="#">
            <label htmlFor="password" />
            <input
              className="form-control"
              placeholder="Email or Phone Number"
              type="text"
              id="password"
              required
            />
            <label htmlFor="email" />
            <input
              className="form-control"
              placeholder="Password"
              type="email"
              id="email"
              required
            />
            <div className=" mt-4">
              <button
                type="submit"
                className={`form-control text-white px-4 py-2 btn-success ${style.loginBtn}`}
                onClick={navigateToHome}
              >
                Log in
              </button>
              <p className="text-center mt-3">
                <a
                  onClick={navigateResetPass}
                  className={`text-decoration-none  ${style.forgottenPassword}`}
                >
                  Forgotten password?
                </a>
              </p>

              <div className="">
                <button
                  type="submit"
                  className={` py-2 form-control text-white  ${style.btnGoogle}`}
                >
                  <BsGoogle /> Login with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
