import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("cart/getAll", async () => {
  const res = await instance.get("/cart");
  return res.data.data.items;
});

export const addToCartAction = createAsyncThunk(
  "cart/addProduct",
  async (id) => {
    const status = await instance.post(`/cart/${id}`);
    return status;
  }
);

export function addToBothCartsAction(id) {
  console.log("hhhhhhhhhhhhhhhhhhhhhh", id);
  return (dispatch) => {
    dispatch(addToCartAction(id)).then(() => {
      dispatch(cartAction());
    });
  };
}

export const removeFromCartAction = createAsyncThunk(
  "cart/addProduct",
  async (id) => {
    const status = await instance.patch(`/cart/${id}`);
    return status;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartProducts: [] },
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
