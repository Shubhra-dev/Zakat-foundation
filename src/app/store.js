import { configureStore } from "@reduxjs/toolkit";
import nisabReducer from "../features/nisab/nisabSlice";
import postReducer from "../features/post/postSlice";
import calculateReducer from "../features/calculate/calculateSlice";

const store = configureStore({
  reducer: {
    nisabRate: nisabReducer,
    post: postReducer,
    calculate: calculateReducer,
  },
});
export default store;
