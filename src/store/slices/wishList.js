import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";
import { addToBothCartsAction } from "./cart";

export const wishListRequestAction = createAsyncThunk(
    "wish/getAll",
    async () => {
        const { token } = localStorage;
        if (token) {
            const res = await instance.get("/wish", { headers: { token } });
            return res.data.data.items;
        }
    }
);

export const addToWishListRequestAction = createAsyncThunk(
    "wish/addProduct",
    async (id) => {
        const { token } = localStorage;
        if (token) {
            const status = await instance.post(
                `/wish/${id}`,
                {},
                {
                    headers: { token },
                }
            );
            return status;
        }
        return token;
    }
);

export function addToWishListAction(id) {
    return (dispatch) => {
        dispatch(addToWishListAction(id)).then(() => {
            dispatch(wishListRequestAction());
        });
    };
}

export const removeFromWishListRequestAction = createAsyncThunk(
    "wish/removeProduct",
    async (id) => {
        const { token } = localStorage;
        if (token) {
            const status = await instance.patch(
                `/wish/${id}`,
                {},
                { headers: { token } }
            );
            return status;
        }
    }
);

export function moveToCartAction(id) {
    return (dispatch) => {
        dispatch(removeFromWishListRequestAction(id)).then(() => {
            dispatch(wishListRequestAction());
        });
        dispatch(addToBothCartsAction());
    };
}
export function removeFromWishAction(id) {
    return (dispatch) => {
        dispatch(removeFromWishListRequestAction(id)).then(() => {
            dispatch(wishListRequestAction());
        });
    };
}

const wishListSlice = createSlice({
    name: "wish",
    initialState: { list: [], loading: false },
    extraReducers: (builder) => {
        builder.addCase(wishListRequestAction.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(
            removeFromWishListRequestAction.pending,
            (state, action) => {
                state.loading = true;
            }
        );
        builder.addCase(
            removeFromWishListRequestAction.fulfilled,
            (state, action) => {
                // removes the item from the wish list slice using its 'id' I got from "action.meta.arg"
                state.list = state.list.filter(
                    (item) => item._id._id != action.meta.arg
                );
            }
        );
    },
});

export default wishListSlice.reducer;
