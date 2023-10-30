import React, { useState } from "react";
import style from "./login.module.css";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(true);

  const navigate = useNavigate();

  const navigateResetPass = () => {
    navigate("/resetPassword");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (email.trim() === "" || password.trim() === "") {
    setFormValid(false);
  } else {
    setFormValid(true);
    navigateToHome();
  }
};


  const navigateToHome = () => {
    if (formValid) {
      navigate("/home");
    }
  };

    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      console.log(e.target.value)
      setPassword(newPassword);
      if (email.trim() !== "" && newPassword.trim() !== "") {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    };

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div
          className={`col-sm-12 col-md-7 col-lg-5 col-xl-5  vh-80 mt-4 p-5 d-flex flex-column justify-content-center ${style.loginInformation}`}
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
          <form
            action="#"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="email" />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              placeholder="Email or Phone Number"
              type="email"
              id="email"
              required
            />
            <label htmlFor="password" />
            <input
              onChange={handlePasswordChange}
              className="form-control"
              placeholder="Password"
              type="password"
              id="password"
              required
            />
            <div className=" mt-4">
              <button
                type="submit"
                className={`form-control text-white px-4 py-2 btn-success ${style.loginBtn}`}
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
