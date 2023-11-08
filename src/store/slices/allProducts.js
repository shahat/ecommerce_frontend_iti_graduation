// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import instance from "../../axiosConfig/instance";

// // ==================== create ca ====================
// export const AllProductsAction = createAsyncThunk(
//   "product/getseachmatach",
//   async (name) => {
//     console.log("giting all serched product");
//     console.log("this is the name i send in action ", name);
//     const res = await instance.get(`/product?keyword=Iphone`);
//     console.log("this is the result of the searched product ", res.data.data);
//     return res.data.data;
//   }
// );

// const searchedProductsSlice = createSlice({
//   name: "allMatchedproducts",
//   initialState: { allMatchedProducts: [] },
//   extraReducers: (builder) => {
//     //movies action => incase if fullfilled these function will be called
//     builder.addCase(AllProductsAction.fulfilled, (state, action) => {
//       state.allMatchedProducts = action.payload;
//     });
//   },
// });

// export default searchedProductsSlice.reducer;
