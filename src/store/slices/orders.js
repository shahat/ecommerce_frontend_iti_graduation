import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const ordersAction = createAsyncThunk("orders/getAll" , async (id)=>{
    console.log("650eee436b295098ce446c66");
    const res = await axios.get(`http://localhost:4000/orders/userId/650eee436b295098ce446c66`)
    console.log(res);
    console.log("a7a from orderssss Slice");
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