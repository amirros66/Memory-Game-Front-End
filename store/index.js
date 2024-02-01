import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./slice";

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

export default store;
