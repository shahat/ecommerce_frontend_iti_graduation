import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
    let token = localStorage.getItem("token")
    let token2 = JSON.parse(localStorage.getItem("token2"))
    if (token) {
        const res = await instance.get("/cart", { headers: { token } });
        return res.data.data.items;
    } else if (token2) {
        const res = await instance.get("/cart", { headers: { token2 } });
        return res.data.data.items;
    }
});

export const addToCartAction = createAsyncThunk(
    "cart/addProduct",
    async (id) => {
        let token = localStorage.getItem("token")
        let token2 = JSON.parse(localStorage.getItem("token2"))
        // console.log(token2);
        if (token) {
            const status = await instance.post(`/cart/${id}`, { token });
            return status;
        } else if (token2){
            const status = await instance.post(`/cart/${id}`, { token2 });
            console.log(status.data);
            return status.data.data;
        }
    }
);

export function addToBothCartsAction(id) {
    return (dispatch) => {
        dispatch(addToCartAction(id)).then(() => {
            dispatch(cartAction());
        });
    };
}

export const removeFromCartRequestAction = createAsyncThunk(
    "cart/removeProduct",
    async (id) => {
        let token = localStorage.getItem("token")
        const status = await instance.patch(`/cart/${id}`, { token });
        return status;
    }
);

export function removeFromCartAction(id) {
    return (dispatch) => {
        dispatch(removeFromCartRequestAction(id)).then(() => {
            dispatch(cartAction());
        });
    };
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartProducts: [] },
    reducers: {
        reset: (state, action) => {
            state.cartProducts = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            console.log("action.payload", action.payload);
            state.cartProducts = action.payload;
            // !token && localStorage.setItem("token2", { userId: status.userId, cartId: status.cartId })
        });
        builder.addCase(removeFromCartRequestAction.fulfilled, (state, action) => {
            // removes the item from the cart using its 'id' I got from "action.meta.arg"
            state.cartProducts = state.cartProducts.filter(
                (item) => item._id._id != action.meta.arg
            );
        });
    },
});

export default cartSlice.reducer;
