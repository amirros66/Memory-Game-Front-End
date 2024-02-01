import { createSlice } from "@reduxjs/toolkit";

initialState = {
  game_id: null,
  users: [],
  display_sequences: [],
  round: 1,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDisplaySequences(state, action) {
      state.display_sequences = action.payload;
    },
  },
});

export const { setDisplaySequences } = gameSlice.actions;

export default gameSlice.reducer;
