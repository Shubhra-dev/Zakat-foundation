import { configureStore } from "@reduxjs/toolkit";
import nisabReducer from "../features/nisab/nisabSlice";

const store = configureStore({
  reducer: {
    nisabRate: nisabReducer,
  },
});
export default store;
