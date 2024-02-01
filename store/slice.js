import createSlice from "@reduxjs/toolkit/createSlice";

initialState = {
  game_id: null,
  users: [],
  display_sequences: [],
  round: 1,
};

slice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export default gameSlice.reducer;
