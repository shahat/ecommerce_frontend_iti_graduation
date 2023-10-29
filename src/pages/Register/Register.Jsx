import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import style from "./register.module.css";

function Register() {
  const navgiate = useNavigate();

  const navigateToLogin = () => {
    navgiate("/login");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className={`col-md-6 col-sm-10 mt-4  d-flex flex-column justify-content-center align-items-center ${style.signupInfo}`}
        >
          <h4 className="mt-4 p-1">Create an account</h4>
          <p>Enter your details below</p>
          <div className="formElements ">
            <form action="#">
              <label htmlFor="username" />
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                id="username"
              />
              <label htmlFor="email" />
              <input
                className="form-control "
                placeholder="Email or Phone Number"
                type="email"
                id="email"
              />
              <label htmlFor="Password" />
              <input
                className="form-control "
                placeholder="Password"
                type="password"
                id="Password"
              />
              <div className="d-flex align-items-center justify-content-between mt-4">
                <button
                  type="submit"
                  className={` form-control text-white ${style.accountCreation}`}
                >
                  Create account
                </button>
              </div>
              <div className="signupWithGoogle">
                <button className="form-control  border mt-2 bg-white">
                  <span>
                    <AiOutlineGoogle className={`m-1 ${style.googleIcon}`} />
                  </span>
                  Sign up with google
                </button>
              </div>
              <div className="login mt-3 mb-5 d-flex justify-content-between">
                <span>
                  <a
                    onClick={navigateToLogin}
                    className={` text-decoration-none p-4 ${style.register}`}
                  >
                    Already have account?
                  </a>
                </span>
                <span>
                  <a
                    onClick={navigateToLogin}
                    className="text-decoration-none p-4 "
                  >
                    Log in
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
