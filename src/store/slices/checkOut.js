import { createSlice } from "@reduxjs/toolkit";


const checkOutSlice = createSlice({
    name: "checkOut",
    initialState: {
        subTotal: 0,
        discount: 0,
        total: 0,
        delivery: 0
    },
    reducers: {
        changeSubTotal: (state, action) => {
            let price = 0
            !isNaN(action.payload.payload)? price = action.payload.payload : price = action.payload
                state.subTotal = state.subTotal + price
                state.total = state.subTotal * (1 - state.discount)
        },
        addDiscount: (state, action) => {
            !isNaN(action.payload) && (state.discount = action.payload / 100)
            state.subTotal = state.subTotal * (1 - state.discount)
        },
        
    },
});


export const { changeSubTotal } = checkOutSlice.actions
export default checkOutSlice.reducer;
