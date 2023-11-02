import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

// ==================== create ca ====================
export const categoryAction = createAsyncThunk(
  "categories/getAll",
  async () => {
    console.log("giting all the categories");
    const res = await instance.get(`/categories/`);
    console.log("this is the result", res.data.data);
    // console.log()
    return res.data.data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: { categories: [] },
  extraReducers: (builder) => {
    //movies action => incase if fullfilled these function will be called
    builder.addCase(categoryAction.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
