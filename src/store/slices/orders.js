import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const orderAction = createAsyncThunk("orders/getAll" , async ()=>{
    const res = await axios.get(`http://localhost:4000/orders`)
    return res.data.allOrders
    
} )

const ordersSlice = createSlice({
    name : "orders",
    initialState : {orders : []},
    extraReducers:(builder)=>{
        builder.addCase(orderAction.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.orders = action.payload
        })
        builder.addCase(orderAction.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})

export default ordersSlice.reducer