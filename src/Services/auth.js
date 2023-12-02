// register and login related functions

import instance from "../axiosConfig/instance";

export const registerAuth = (data) => {
  return instance.post("/users/signup", data);
};

export const loginAuth = (data) => {
  console.log("from the log in ");
  return instance.post("/users/signin", data);
};

export const sendRecoveryCode = (data) => {
  return instance.post("/emailRecovery", data);
};

export const enterResetCode = (data) => {
  return instance.post("/resetCode", data);
};

export const enterResetPassword = (data) => {
  return instance.patch("/resetPassword", data);
};
