import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
    const { token, token2 } = localStorage;
    if (token) {
        const res = await instance.get("/cart", { headers: { token } });
        return res.data.data.items;
    } else if (token2) {
        const res = await instance.get("/cart", { headers: { token: token2 } });
        return res.data.data.items;
    }
});

export const addToCartAction = createAsyncThunk(
    "cart/addProduct",
    async (id) => {
        let { token, token2 } = localStorage;
        if (token) {
            const status = await instance.post(
                `/cart/${id}`,
                {},
                {
                    headers: { token },
                }
            );
            return status;
        } else if (token2) {
            const status = await instance.post(
                `/cart/${id}`,
                {},
                {
                    headers: { token: token2 },
                }
            );
            return status.data.data;
        }
        const status = await instance.post(`/cart/${id}`);
        token2 = JSON.stringify({
            userId: status.data.data.userId,
            cartId: status.data.data._id,
        });
        localStorage.setItem("token2", token2);
        return status.data.data;
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
        let { token, token2 } = localStorage;
        let status
        if (token) {
            status = await instance.patch(
                `/cart/${id}`,
                // {},
                // { headers: token }
                { token }
            );
        } else if(token2){
            status = await instance.patch(
                `/cart/${id}`,
                // {},
                // { headers: {token: token2} }
                {token: token2}
            );
        }
        console.log(status);
        return status;
    }
);

export function removeFromCartAction(id) {
    return (dispatch) => {
        dispatch(removeFromCartRequestAction(id)).then((data) => {
            console.log("data", data);
            dispatch(cartAction());
        });
    };
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartProducts: [] },
    reducers: {
        reset: (state, action) => {
            state.cartProducts = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
        });
        builder.addCase(
            removeFromCartRequestAction.fulfilled,
            (state, action) => {
                // removes the item from the cart using its 'id' I got from "action.meta.arg"
                state.cartProducts = state.cartProducts.filter(
                    (item) => item._id._id != action.meta.arg
                );
            }
        );
    },
});

export default cartSlice.reducer;
