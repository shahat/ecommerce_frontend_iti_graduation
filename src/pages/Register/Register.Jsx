import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import style from "./register.module.css";

function Register() {
  // userName with regx and errors
  const usernameRegx = /^[a-zA-Z0-9]{3,20}$/;
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);

  // email with regx and errors
  const emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  // password with regx and errors
  const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // regx expression to be used commonly "generally"
  const specialCharacterRegx = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
  const lowerCaseRegx = /[a-z]/;
  const upperCaseRegx = /[A-Z]/;

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
    if (!usernameRegx.test(userName)) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
      if (!emailRegx.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
  };


  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (
      newPassword.length < 8 ||
      !lowerCaseRegx.test(password) ||
      !upperCaseRegx.test(password) ||
      !specialCharacterRegx.test(password)
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();
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
            <form
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="userNameInfo">
                <label htmlFor="username" />
                <input
                  onChange={(e) => {
                    handleUserNameInput(e);
                  }}
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  id="username"
                  required
                  value={userName}
                />
                {userNameError ? (
                  <p className="text-danger">
                    Name should contain at least 3 characters
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="email">
                <label htmlFor="email" />
                <input
                  onChange={(e) => {
                    handleEmailInput(e);
                  }}
                  className="form-control "
                  placeholder="Email"
                  type="email"
                  id="email"
                  required
                  value={email}
                />
                {emailError ? <p className="text-danger">Invalid email</p> : ""}
              </div>

              <div className="password">
                <label htmlFor="Password" />
                <input
                  onChange={(e) => {
                    handlePassword(e);
                  }}
                  className="form-control "
                  placeholder="Password"
                  type="password"
                  id="Password"
                  required
                  value={password}
                />
              
                {passwordError && (
                  <div>
                      <p> Your password must meet the following criteria:</p>
                    <ul className="text-danger">
                      {!passwordRegx.test(password) && (
                        <li>At least 8 characters</li>
                      )}

                      {!lowerCaseRegx.test(password) && (
                        <li>At least one lowercase letter (a-z)</li>
                      )}

                      {!upperCaseRegx.test(password) && (
                        <li>At least one uppercase letter (A-Z)</li>
                      )}

                      {!specialCharacterRegx.test(password) && (
                        <li>At least one special character</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
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
                    className={`text-decoration-none p-4 ${style.loginBtn}`}
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
