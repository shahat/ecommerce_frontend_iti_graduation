import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";
// import axios from "axios";

export var productAction = createAsyncThunk(
  "products/getAll",
  async (currentPage) => {
    var res = await instance.get(`/product?page=${currentPage}`);
    return res.data.data;
  }
);

var products = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder.addCase(productAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default products.reducer;
