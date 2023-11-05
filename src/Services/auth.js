// register and login related functions

import instance from "../axiosConfig/instance"

export const registerAuth= (data)=>{
  return instance.post("/users/signup",data);
}

export const loginAuth = (data)=>{
    return instance.post("/users/signin", data);
}



