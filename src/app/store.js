import { configureStore } from "@reduxjs/toolkit";
import nisabReducer from "../features/nisab/nisabSlice";
import postReducer from "../features/post/postSlice";

const store = configureStore({
  reducer: {
    nisabRate: nisabReducer,
    post: postReducer,
  },
});
export default store;
