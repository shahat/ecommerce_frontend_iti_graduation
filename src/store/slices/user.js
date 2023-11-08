import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const userAction = createAsyncThunk("user/getUser" , async ()=>{
    console.log("a7a");
    const res = await axios.get(`http://localhost:4000/users/650eee436b295098ce446c66`)
    return res.data
})


const userSlice = createSlice({
    name : "user",
    initialState : {user : {}},
    extraReducers:(builder)=>{
        builder.addCase(userAction.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.user = action.payload
        })
        builder.addCase(userAction.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})

export default userSlice.reducer