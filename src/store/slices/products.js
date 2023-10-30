import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export var productAction = createAsyncThunk(
  "product/getAll",
  async (currentPage) => {
    var res = await axios.get(`https://api.url?page=${currentPage}`);
    return res.data;
  }
);

var products = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder.addCase(productAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default products.reducer;
