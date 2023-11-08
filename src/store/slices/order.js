import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const oneOrderAction = createAsyncThunk("orders/getAll" , async (id)=>{
    const res = await axios.get(`http://localhost:4000/orders/${id}`)
    return res.data.order
    
} )

const orderSlice = createSlice({
    name : "order",
    initialState : {order : {}},
    extraReducers:(builder)=>{
        builder.addCase(oneOrderAction.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.order = action.payload
        })
        builder.addCase(oneOrderAction.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})

export default orderSlice.reducer