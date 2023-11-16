import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import style from "./register.module.css";
import { registerAuth } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";
import instance from "../../axiosConfig/instance";

function Register() {
    const navigate = useNavigate();

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

    // userName with regx and errors
    const nameRegx = /^[a-zA-Z0-9 ]{3,20}$/;

    // email with regx and errors
    const emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;

    // password with regx and errors
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    // regx expression to be used commonly "generally"
    const specialCharacterRegx = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
    const lowerCaseRegx = /[a-z]/;
    const upperCaseRegx = /[A-Z]/;

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nameError: true,
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        passwordMatch: false,
    });

    const navigateToLogin = () => {
        navigate("/login");
    };

    const handleValidation = (e) => {
        if (e.target.name == "firstPassword") {
            setUser({ ...user, password: e.target.value });
            setErrors({
                ...errors,
                passwordError:
                    e.target.value.length == 0
                        ? "Password is required"
                        : !passwordRegx.test(e.target.value)
                        ? "Password must meet the specified criteria"
                        : "",
            });
        } else if (e.target.name == "secondPassword") {
            setUser({ ...user, confirmPassword: e.target.value });
            setErrors({
                ...errors,
                confirmPasswordError:
                    e.target.value.length == 0
                        ? "Password is required"
                        : !passwordRegx.test(e.target.value)
                        ? "Password must meet the specified criteria"
                        : "",
            });
        } else if (e.target.name == "email") {
            setUser({ ...user, email: e.target.value });
            setErrors({
                ...errors,
                emailError:
                    e.target.value.length == 0 ? "Email is Required" : "",
            });
        } else if (e.target.name == "name") {
            setUser({ ...user, name: e.target.value });
            setErrors({
                ...errors,
                nameError: e.target.value.length == 0 ? "Name is Required" : "",
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            errors.nameError ||
            errors.emailError ||
            errors.passwordError ||
            errors.confirmPasswordError
        ) {
            toast.error("Validation Error", { position: "top-center" });
        } else {
            try {
                registerAuth(user).then(async (res) => {
                    let { token2 } = localStorage;
                    if (token2) {
                        let tokenObj = JSON.parse(token2);
                        tokenObj.userId = res.data.data.user._id;
                        token2 = JSON.stringify(tokenObj);
                        await instance.post("/cart/", {}, {
                            headers: { token2 },
                        })
                        await instance.post("/wish/", {}, {
                            headers: { token2 },
                        })
                    }
                    console.log(res);
                    navigate("/login");
                });
                // before edit
                // const res = await registerAuth(user);
                // navigate("/login");
                // console.log(res);
            } catch (error) {
                if (error.response) {
                    const errorMessage = error.response.data.message;
                    // console.log(errorMessage)

                    toast.error(errorMessage, {
                        position: "top-center",
                    });
                }
            }
        }

        if (user.password !== user.confirmPassword) {
            setErrors({ ...errors, passwordMatch: "Passwords do not match!" });
        } else {
            setErrors({ ...errors, passwordMatch: "" });
        }
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
                            autoComplete="off"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <div className="nameInfo">
                                <label htmlFor="name" />
                                <input
                                    onChange={(e) => {
                                        handleValidation(e);
                                    }}
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                />

                                <p className="text-danger">
                                    {errors.nameError}
                                </p>
                            </div>
                            <div className="email">
                                <label htmlFor="email" />
                                <input
                                    onChange={(e) => {
                                        handleValidation(e);
                                    }}
                                    className={`form-control ${
                                        errors.emailError &&
                                        "border-danger shadow-none"
                                    }`}
                                    placeholder="Email"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                />
                                {errors.emailError ? (
                                    <p className="text-danger">
                                        {errors.emailError}
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div className="password">
                                <label htmlFor="Password" />
                                <input
                                    onChange={(e) => {
                                        handleValidation(e);
                                    }}
                                    className={`form-control ${
                                        errors.passwordError &&
                                        "border-danger shadow-none"
                                    }`}
                                    placeholder="Password"
                                    type="password"
                                    id="password"
                                    name="firstPassword"
                                    value={user.password}
                                />
                                <div className="passInstructions my-1">
                                    <p className="fw-bold p-0 my-1 text-muted">
                                        Password strength:
                                    </p>
                                    <p className="text-muted">
                                        use at least 8 characters, one lowercase
                                        letter, one uppercase letter, one
                                        special letter
                                    </p>
                                </div>
                                <div className="passwordConfirmation">
                                    <input
                                        onChange={(e) => {
                                            handleValidation(e);
                                        }}
                                        className={`form-control ${
                                            errors.confirmPasswordError &&
                                            "border-danger shadow-none mt-4"
                                        }`}
                                        placeholder="Confirm Password"
                                        type="password"
                                        id="confirmPassRecovery"
                                        name="secondPassword"
                                        value={user.confirmPassword}
                                    />
                                </div>

                                {errors.passwordMatch && (
                                    <p className="text-danger">
                                        Sorry, Password does not match
                                    </p>
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
                                        <AiOutlineGoogle
                                            className={`m-1 ${style.googleIcon}`}
                                        />
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
