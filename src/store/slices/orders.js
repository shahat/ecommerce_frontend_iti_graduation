import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const ordersAction = createAsyncThunk("orders/getAll" , async (id)=>{
    const res = await axios.get(`http://localhost:4000/orders/userId/${id}`)
    console.log(res);
    return res.data.allOrders
    
} )

const ordersSlice = createSlice({
    name : "orders",
    initialState : {orders : []},
    extraReducers:(builder)=>{
        builder.addCase(ordersAction.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.orders = action.payload
        })
        builder.addCase(ordersAction.rejected,(state,action)=>{
            console.log("rejected");
        })
    }
})

export default ordersSlice.reducer