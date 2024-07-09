import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "./postApi";
const initialState = {
  post: [],
  isLoading: false,
  isError: false,
  errorMsg: null,
};
export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const post = await getPost();
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error?.message;
    });
  },
});
export default postSlice.reducer;
