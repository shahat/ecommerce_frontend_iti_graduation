// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export var subCategoryProductsAction = createAsyncThunk(
//   "subCategoryProducts/getAll",
//   async (currentPage, id) => {
//     var res = await axios.get(
//       `https://openmarket.onrender.com/subcategories/${id}?page=${currentPage}`
//     );
//     console.log(res);
//     console.log(res.data.data);
//     return res.data.data;
//   }
// );

// var subCategoryProducts = createSlice({
//   name: "subCategoryProducts",
//   initialState: { subCategoryProducts: [] },
//   extraReducers: (builder) => {
//     builder.addCase(subCategoryProductsAction.fulfilled, (state, action) => {
//       state.subCategoryProducts = action.payload;
//     });
//   },
// });

// export default subCategoryProducts.reducer;
