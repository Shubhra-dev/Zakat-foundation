import { getGoldRAte } from "./getApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  goldRate: {
    buying_price: 0,
    selling_price: 0,
  },
  isLoading: false,
  isError: false,
  errorMsg: null,
};
export const fetchGoldRate = createAsyncThunk(
  "nisab/fetchGoldRate",
  async () => {
    const goldRate = await getGoldRAte();
    return goldRate;
  }
);

const nisabSlice = createSlice({
  name: "nisab",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGoldRate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGoldRate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.goldRate = action.payload;
    });
    builder.addCase(fetchGoldRate.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error?.message;
    });
  },
});
export default nisabSlice.reducer;
