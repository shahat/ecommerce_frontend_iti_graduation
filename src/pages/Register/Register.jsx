import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import style from "./register.module.css";
import { registerAuth } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Register() {
  // userName with regx and errors
  const nameRegx = /^[a-zA-Z0-9 ]{3,15}$/;

  // email with regx and errors
  const emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;

  // password with regx and errors
  const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    passwordMatch: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  const [isConfirmPasswordClicked, setIsConfirmPasswordClicked] =
    useState(false);

  async function auth() {
    try {
      const response = await fetch("http://localhost:4000/request", {
        method: "post",
      });
      const data = await response.json();
      console.log("returned data", data);
      navigate(data.url);
      console.log("dataURL", data.url);
    } catch (error) {
      console.error("Error fetching Google auth URL", error);
    }
  }

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleValidation = (e) => {
    if (e.target.name === "name") {
      setUser({ ...user, name: e.target.value });
      setErrors({
        ...errors,
        nameError:
          e.target.value.length == 0
            ? "Name is required"
            : !nameRegx.test(e.target.value)
            ? "name must be at least 3 characters"
            : "",
      });
    } else if (e.target.name === "firstPassword") {
      setUser({ ...user, password: e.target.value });
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length == 0
            ? "Password is required"
            : !passwordRegx.test(e.target.value)
            ? "Password must be at least 8 characters, one uppercase, one lowercase, special character"
            : "",
      });
    } else if (e.target.name === "secondPassword") {
      setUser({ ...user, confirmPassword: e.target.value });
      const isPasswordEmpty = e.target.value === 0;
      const doPasswordMatch = user.password === e.target.value;
      setErrors({
        ...errors,
        confirmPasswordError: isPasswordEmpty
          ? "Password is required"
          : doPasswordMatch
          ? ""
          : "Confirm password must match primary password",
      });
    } else if (e.target.name === "email") {
      setUser({ ...user, email: e.target.value });
      setErrors({
        ...errors,
        emailError:
          e.target.value.length == 0
            ? "Email is required"
            : !emailRegx.test(e.target.value)
            ? "Invalid email address. Please enter a valid email address in the format username@domain."
            : "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    registerAuth(user)
      .then(async (res) => {
        console.log("Navigating to login page");
        navigateToLogin();
        console.log(res);
        let { token2 } = localStorage;
        if (token2) {
          let tokenObj = JSON.parse(token2);
          tokenObj.userId = res.data.data.user._id;
          token2 = JSON.stringify(tokenObj);
          await instance.post(
            "/cart/",
            {},
            {
              headers: { token2 },
            }
          );
          await instance.post(
            "/wish/",
            {},
            {
              headers: { token2 },
            }
          );
        } else {
          token2 = JSON.stringify({ userId: res.data.data.user._id });
          await instance.post(
            "/cart/",
            {},
            {
              headers: { token2 },
            }
          );
          await instance.post(
            "/wish/",
            {},
            {
              headers: { token2 },
            }
          );
        }
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          toast.error(errorMessage, {
            position: "top-center",
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className={` col-sm-8  col-lg-4  mt-2  d-flex flex-column justify-content-center align-items-center ${style.signupInfo}`}
        >
          <h4 className="mt-4 p-1">Create an account</h4>
          <p>Enter your details below</p>
          <div className="formElements">
            <form
              action="#"
              autoComplete="off"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="nameInfo">
                <label htmlFor="name" className="mt-3">
                  Name :
                </label>
                <input
                  onChange={(e) => {
                    handleValidation(e);
                  }}
                  className={`form-control`}
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                />

                {errors.nameError && (
                  <p className="text-danger">{errors.nameError}</p>
                )}
              </div>

              <div className="email ">
                <label htmlFor="email" className="mt-3">
                  Email :
                </label>
                <input
                  onChange={(e) => {
                    handleValidation(e);
                  }}
                  className={`form-control ${
                    errors.emailError && "border-danger shadow-none border-2"
                  }`}
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                />
              </div>
                {errors.emailError && (
                  <small className="text-danger fw-bold">{errors.emailError}</small>
                )}

              <div className="password">
                <label htmlFor="password" className="mt-3">
                  Password :
                </label>

                <div className="d-flex align-items-center position-relative">
                  <input
                    onChange={(e) => {
                      handleValidation(e);
                    }}
                    className={`form-control  ${
                      errors.passwordError && "border-danger shadow-none"
                    }`}
                    placeholder="Password"
                    type={isClicked ? "text" : "password"}
                    id="password"
                    name="firstPassword"
                    value={user.password}
                  />
                  {isClicked ? (
                    <FaEyeSlash
                      onClick={() => {
                        setIsClicked(!isClicked);
                      }}
                      role="button"
                      className="position-absolute end-0 me-2"
                    />
                  ) : (
                    <FaEye
                      onClick={() => {
                        setIsClicked(!isClicked);
                      }}
                      role="button"
                      className="position-absolute end-0 me-2"
                    />
                  )}
                </div>
                {errors.passwordError && (
                  <small className="text-danger fw-bold">{errors.passwordError}</small>
                )}

                <div className="passwordConfirmation">
                  <label htmlFor="passwordConfirmation" className="mt-3">
                    Confirm Password :
                  </label>

                  <div className="d-flex align-items-center position-relative">
                    <input
                      onChange={(e) => {
                        handleValidation(e);
                      }}
                      className={`form-control  ${
                        errors.confirmPasswordError &&
                        "border-danger shadow-none "
                      }`}
                      placeholder="Confirm Password"
                      type={isConfirmPasswordClicked ? "text" : "password"}
                      id="passwordConfirmation"
                      name="secondPassword"
                      value={user.confirmPassword}
                    />
                    {isConfirmPasswordClicked ? (
                      <FaEyeSlash
                        onClick={() => {
                          setIsConfirmPasswordClicked(
                            !isConfirmPasswordClicked
                          );
                        }}
                        role="button"
                        className="position-absolute end-0 me-2"
                      />
                    ) : (
                      <FaEye
                        onClick={() => {
                          setIsConfirmPasswordClicked(
                            !isConfirmPasswordClicked
                          );
                        }}
                        role="button"
                        className="position-absolute end-0 me-2"
                      />
                    )}
                  </div>
                </div>
                {errors.confirmPasswordError && (
                  <small className="text-danger">
                    {errors.confirmPasswordError}
                  </small>
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
                <button
                  onClick={() => {
                    auth();
                  }}
                  className="form-control  border mt-2 bg-white"
                >
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
      <Toaster />
    </div>
  );
}

export default Register;
