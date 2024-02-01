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
  reducers: {},
});

export default gameSlice.reducer;
