// register and login related functions

import instance from "../axiosConfig/instance"

export const registerAuth= (data)=>{
  return  instance.post("/user/signup",data)
}

export const loginAuth = (data)=>{
    return instance.post("/user/login",data)
}
