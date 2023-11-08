import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
    const res = await instance.get("/cart");
    return res.data.data.items;
});

export const addToCartAction = createAsyncThunk(
    "cart/addProduct",
    async (id) => {
        let token = localStorage.getItem("token")
        // let fakTok = localStorage.getItem("fakTok")
        // console.log(fakTok);
        if (token) {
            const status = await instance.post(`/cart/${id}`, { token });
            return status;
        }
        
        // !token && localStorage.setItem("fakTok", { userId: status.userId, cartId: status.cartId })

    }
);

export function addToBothCartsAction(id) {
    return (dispatch) => {
        dispatch(addToCartAction(id)).then(() => {
            dispatch(cartAction());
        });
    };
}

export const removeFromCartAction = createAsyncThunk(
    "cart/removeProduct",
    async (id) => {
        console.log("front");
        const status = await instance.patch(`/cart/${id}`);
        return status;
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartProducts: [] },
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            console.log(action.payload);
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
