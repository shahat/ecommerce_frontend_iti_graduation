import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const oneOrderAction = createAsyncThunk("get/oneOrder" , async (id)=>{
    const res = await axios.get(`http://localhost:4000/orders/${id}`)
    console.log(res);
    return res.data.order
    
} )

const oneOrderSlice = createSlice({
    name : "oneOrder",
    initialState : {oneOrder : {}},
    extraReducers:(builder)=>{
        builder.addCase(oneOrderAction.fulfilled,(state,action)=>{
            state.oneOrder = action.payload[0]
        })
        builder.addCase(oneOrderAction.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})

export default oneOrderSlice.reducer