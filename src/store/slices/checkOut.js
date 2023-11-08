import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";


const checkOutSlice = createSlice({
    name: "checkOut",
    initialState: { 
        totalPrice : 0,
        discount : 0
     },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
        });
        builder.addCase(removeFromCartAction.fulfilled, (state, action) => {
            // removes the item from the cart using its id I got from "action.meta.arg"
            state.cartProducts = state.cartProducts.filter(
                (item) => item._id._id != action.meta.arg
            );
        });
    },
});

export default cartSlice.reducer;
