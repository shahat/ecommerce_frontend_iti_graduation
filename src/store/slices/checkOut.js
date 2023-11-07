import { createSlice } from "@reduxjs/toolkit";


const checkOutSlice = createSlice({
    name: "checkOut",
    initialState: { 
        subTotal : 0,
        discount : 0,
        total: 0
    },
    reducers: {
        changeSubTotal: (state, action)=>{
            isNaN(action.payload) && (state.subTotal = state.subTotal + action.payload)
            state.total = state.subTotal
        },
        addDiscount: (state, action)=>{
            isNaN(action.payload) && (state.discount = action.payload/100)
            state.subTotal = state.subTotal * (1 - state.discount)
        }
    },
});


export const { changeSubTotal } = checkOutSlice.actions
export default checkOutSlice.reducer;
