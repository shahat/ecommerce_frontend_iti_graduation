import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
    const res = await instance.get("/cart");
    return res.data.data.items;
});

export const addToCartAction = createAsyncThunk(
    "cart/addProduct",
    async (id) => {
        const status = await instance.post("/cart/product", { productId: id });
        return status;
    }
);

export function addToBothCartsAction(id) {
    return (dispatch) => {
        dispatch(addToCartAction(id)).then(() => {
            dispatch(cartAction());
        });
    };
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartProducts: [] },
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
        });
        builder.addCase(addToCartAction.fulfilled, (state, action) => {
            // state.cartProducts.push(action.payload.config.data)
        });
    },
});

export default cartSlice.reducer;
