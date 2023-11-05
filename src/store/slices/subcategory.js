import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export var subCategoryAction = createAsyncThunk(
  "subCategories/getAll",
  async (currentPage2) => {
    var res = await axios.get(
      `https://openmarket.onrender.com/subcategories?page=${currentPage2}`
    );
    // console.log(res);
    // console.log(res.data.data);
    return res.data.data;
  }
);

var subCategories = createSlice({
  name: "subCategories",
  initialState: { subCategories: [] },
  extraReducers: (builder) => {
    builder.addCase(subCategoryAction.fulfilled, (state, action) => {
      state.subCategories = action.payload;
    });
  },
});

export default subCategories.reducer;
