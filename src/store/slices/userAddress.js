import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const userAddressPostAction = createAsyncThunk(
  "create/userAddress",
  async (address) => {
    console.log([...address]);
    const { id } = address[0];
    const sendAddress = address[1];
    console.log(sendAddress);
    const res = await axios.put(
      `https://openmarket.onrender.com/users/address/${id}`,
      [...sendAddress]
    );
    return res;
  }
);

export function getAddress(address, id) {
  return (dispatch) => {
    dispatch(userAddressPostAction(address)).then(() => {
      dispatch(userAddressGetAction(id));
    });
  };
}
export const userAddressGetAction = createAsyncThunk(
  "get/userAddress",
  async (id) => {
    const res = await axios.get(`https://openmarket.onrender.com/users/${id}`);
    return res.data.addressBook;
  }
);

const userAddressSlice = createSlice({
  name: "address",
  initialState: { address: [] },
  extraReducers: (builder) => {
    builder.addCase(userAddressGetAction.fulfilled, (state, action) => {
      state.address = action.payload;
      console.log(action.payload);
    });
    builder.addCase(userAddressGetAction.rejected, (state, action) => {
      console.log("rejected");
    });
    builder.addCase(userAddressPostAction.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(userAddressPostAction.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default userAddressSlice.reducer;
