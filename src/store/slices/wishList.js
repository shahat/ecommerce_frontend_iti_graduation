import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const wishListAction = createAsyncThunk("wish/getAll", async () => {
    const res = await instance.get("/wish");
    return res.data.data.items;
});

export const addToWishListAction = createAsyncThunk(
    "wish/addProduct",
    async (id) => {
        const status = await instance.patch('/wish', {productId: id});
        return status;
    }
);

export const removeFromWishListAction = createAsyncThunk(
    "wish/addProduct",
    async (id) => {
        const status = await instance.delete('/wish', {productId: id});
        return status;
    }
);

// export function addToBothCartsAction(id) {
//     return (dispatch) => {
//         dispatch(addToCartAction(id)).then(() => {
//             dispatch(cartAction());
//         });
//     };
// }


const cartSlice = createSlice({
    name: "wish",
    initialState: { list: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(wishListAction.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(removeFromWishListAction.fulfilled, (state, action) => {
            // removes the item from the cart using its id I got from "action.meta.arg"
            state.list = state.cartProducts.filter(
                (item) => item._id._id != action.meta.arg
            );
        });
    },
});

export default cartSlice.reducer;
