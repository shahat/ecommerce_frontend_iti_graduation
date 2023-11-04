import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import style from "./register.module.css";
import { registerAuth } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  // userName with regx and errors
  const nameRegx = /^[a-zA-Z0-9 ]{3,20}$/;
  const [name, setName] = useState("");
  const [NameError, setNameError] = useState(false);

  // email with regx and errors
  const emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  // password with regx and errors
  const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  const [userPassword, setUserPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  // const [firstPassword, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // regx expression to be used commonly "generally"
  const specialCharacterRegx = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
  const lowerCaseRegx = /[a-z]/;
  const upperCaseRegx = /[A-Z]/;

  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    validatePassword();
  }, [userPassword.password, userPassword.confirmPassword]);

  const handleNameInput = (e) => {
    setName(e.target.value);
    if (!nameRegx.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
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
    const isPassword = e.target.name === "firstPassword";
    setUserPassword({
      ...userPassword,
      [isPassword ? "password" : "confirmPassword"]: newPassword,
    });

    validatePassword();
    // if (e.target.name === "firstPassword") {
    //   setUserPassword({ ...userPassword, password: newPassword });
    // } else if (e.target.name === "secondPassword") {
    //   setUserPassword({ ...userPassword, confirmPassword: newPassword });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    validatePassword();
    if (!passwordError) {
      navigateToLogin();
    }

      if (NameError || emailError || passwordError) {
        toast.error("Validation Error", { position: "top-center" });
      } else {
        try {
          // these parameters should be matched with the keys identified in the schema model
          const response = await registerAuth(name, email, password);
          console.log(response);
          navigate("/login");
        } catch (error) {
          // should be customized error
          toast.error("Sorry the server couldn't proceed with your request!", {
            position: "top-center",
          });
        }
      }
    // if (userPassword.password === userPassword.confirmPassword) {
    //   navigateToLogin();
    //   setPasswordError(false);
    // } else {
    //   setPasswordError(true);
    // }
  };


  const validatePassword = () => {
    const { password, confirmPassword } = userPassword;
   
    const isPasswordValid =
      password.length >= 8 &&
      lowerCaseRegx.test(password) &&
      upperCaseRegx.test(password) &&
      specialCharacterRegx.test(password);
    const doMatchPassword = password === confirmPassword;
    setPasswordError(!isPasswordValid || !doMatchPassword);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className={` col-sm-12 col-md-6 col-lg-5 col-xl-5 mt-2  d-flex flex-column justify-content-center align-items-center ${style.signupInfo}`}
        >
          <h4 className="mt-4 p-1">Create an account</h4>
          <p>Enter your details below</p>
          <div className="formElements">
            <form
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="nameInfo">
                <label htmlFor="name" />
                <input
                  onChange={(e) => {
                    handleNameInput(e);
                  }}
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  id="name"
                  required
                  value={name}
                />
                {NameError ? (
                  <p className="text-danger">
                    Name should contain at least 4 characters
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
                  id="password"
                  name="firstPassword"
                  required
                  value={userPassword.password}
                />
                <div className="passInstructions my-1">
                  <p className="fw-bold p-0 my-1 text-muted">
                    Password strength:
                  </p>
                  <p className="text-muted">
                    use at least 8 characters, one lowercase letter, one
                    uppercase letter, one special letter
                  </p>
                </div>
                <div className="passwordConfirmation">
                  <input
                    onChange={(e) => {
                      handlePassword(e);
                    }}
                    className="form-control mt-4 "
                    placeholder="Confirm Password"
                    type="password"
                    id="confirmPassRecovery"
                    name="secondPassword"
                    required
                    value={userPassword.confirmPassword}
                  />
                </div>

                {/* {passwordError && (
                  <div>
                    <p> Your password must meet the following criteria:</p>
                    <ul className="text-danger">
                      {!passwordRegx.test(userPassword.confirmPassword) && (
                        <li>At least 8 characters</li>
                      )}

                      {!lowerCaseRegx.test(userPassword.confirmPassword) && (
                        <li>At least one lowercase letter (a-z)</li>
                      )}

                      {!upperCaseRegx.test(userPassword.confirmPassword) && (
                        <li>At least one uppercase letter (A-Z)</li>
                      )}

                      {!specialCharacterRegx.test(
                        userPassword.confirmPassword
                      ) && <li>At least one special character</li>}
                    </ul>
                  </div>
                )} */}

                {formSubmitted && passwordError ? (
                  <p className="text-danger">Sorry, Password does not match</p>
                ) : (
                  ""
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
      <Toaster />
    </div>
  );
}

export default Register;
