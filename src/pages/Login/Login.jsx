import React, { useContext, useState } from "react";
import style from "./login.module.css";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../Services/auth";
import { authContext } from "../../contexts/authContext";
import toast, { Toaster } from "react-hot-toast";
import image from "../../assets/images/150x80 logo.png";
// import { GoogleLogin } from "@react-oauth/google";

function Login({ onSuccess, onError }) {
  // function googleNav(url) {
  //   window.location.href = url;
  // }

  // async function auth() {
  //   try {
  //     const response = await fetch("http://localhost:4000/request", {
  //       method: "post",
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     googleNav(data.url);
  //     console.log(data.url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const clientId =
  //   "197524292801-49dnp7601ctioie1pa9mtcgdkmcm52r0.apps.googleusercontent.com";

  //   const handleLoginSuccess = (response) => {
  //     console.log(response);
  //   };

  //   const handleLoginError = (error)=>{
  //     console.log('Google login failed', error)
  //   }

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const { setLogin } = useContext(authContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    passwordError: "",
    emailError: "",
    nameError: "",
  });

  const handleValidation = (e) => {
    if (e.target.name == "password") {
      setUser({ ...user, password: e.target.value });
      setErrors({
        ...errors,
        passwordError: e.target.value.length == 0 ? "Password is required" : "",
      });
    } else if (e.target.name == "email") {
      setUser({ ...user, email: e.target.value });
      setErrors({
        ...errors,
        emailError: e.target.value.length == 0 ? "Email is required" : "",
      });
    }
  };

  const navigate = useNavigate();

  const navigateResetPass = () => {
    navigate("/resetPassword");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.emailError || errors.passwordError) {
      toast.error("Email or password is incorrect"),
        {
          position: "top-center",
        };
    } else {
      try {
        const result = await loginAuth(user);
        console.log(result);
        localStorage.removeItem("token2")
        localStorage.setItem("token", result.data.token);
        setLogin(true);
        navigate("/");
      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data.message;

          toast.error(errorMessage, {
            position: "top-center",
          });
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img
          src={image}
          className={`${style.logoImage}`}
          onClick={navigateToHome}
        />
      </div>

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
            autoComplete="off"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="email" />
            <input
              onChange={(e) => {
                handleValidation(e);
              }}
              className={`form-control ${
                errors.emailError && "border-danger shadow-none"
              }`}
              placeholder="Email..."
              type="email"
              id="email"
              name="email"
            />
            <p className="text-danger">{errors.emailError}</p>

            <label htmlFor="password" />
            <input
              onChange={(e) => {
                handleValidation(e);
              }}
              className={`form-control ${
                errors.passwordError && "border-danger shadow-none"
              }`}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            />
            <p className="text-danger">{errors.passwordError}</p>

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
                  onClick={google}
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

      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      /> */}
      <Toaster />
    </div>
  );
}
export default Login;
