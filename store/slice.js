import { createSlice } from "@reduxjs/toolkit";

initialState = {
  game_id: null,
  user_id: null,
  users: [],
  display_sequences: [],
  round: 1,
  timeout: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDisplaySequences(state, action) {
      state.display_sequences = action.payload;
    },
    setGameID: (state, action) => {
      state.game_id = action.payload;
    },
    setGame: (state, action) => {
      state.game_id = action.payload.game_id;
      state.user_id = action.payload.user_id;
    },
    setUserID: (state, action) => {
      state.user_id = action.payload.id;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setGame, setGameID, setUserID, setDisplaySequences, setUsers } =
  gameSlice.actions;

export default gameSlice.reducer;
