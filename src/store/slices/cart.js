import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";
import { LoaderIcon } from "react-hot-toast";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
    const { token, token2 } = localStorage;
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
                    headers: { token2 },
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
        dispatch(LoaderIcon)
        dispatch(addToCartAction(id)).then(() => {
            dispatch(cartAction());
        });
    };
}

export const modifyProductAction = createAsyncThunk("cart/modifyProduct", async (params) => {
    const {productId, quantity} = params
    // console.log(productId, quantity);
    const { token, token2 } = localStorage;
    console.log(token2);
    var res
    if (token) {
        res = await instance.patch("/cart", { productId, quantity }, { headers: { token } });
        // return res; 
    } else if (token2) {
        res = await instance.patch("/cart", { productId, quantity }, { headers: { token2 } });
    }
    return res;

})

export const removeFromCartRequestAction = createAsyncThunk(
    "cart/removeProduct",
    async (id) => {
        let { token, token2 } = localStorage;
        let status
        if (token) {
            status = await instance.patch(
                `/cart/${id}`,
                {},
                { headers: { token } }
            );
        } else if(token2){
            status = await instance.patch(
                `/cart/${id}`,
                {},
                { headers: { token2 } }
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
    initialState: { cartProducts: [], loading: false },
    reducers: {
        reset: (state) => {
            state.cartProducts = [];
        },
        loadingToggleAction: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cartAction.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
            state.loading = false
        });
        builder.addCase(modifyProductAction.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(modifyProductAction.fulfilled, (state, action) => {
            console.log("full");
            state.loading = false
        });
        builder.addCase(modifyProductAction.rejected, (state, action) => {
            console.log("rejected");
            state.loading = false
        });
        builder.addCase(
            removeFromCartRequestAction.fulfilled,
            (state, action) => {
                // removes the item from the cart using its 'id' I got from "action.meta.arg"
                state.cartProducts = state.cartProducts.filter(
                    (item) => item._id._id != action.meta.arg
                );
                state.loading = false
            }
        );
    },
});

export const {reset, loadingToggleAction} = cartSlice.actions
export default cartSlice.reducer;
