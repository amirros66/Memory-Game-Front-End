import createSlice from "@reduxjs/toolkit/createSlice";

initialState = {
  users: [],
  games: [],
  display_sequence: "",
  input_sequence: "",
};
slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users = [...state.users, action.payload];
    },
  },
});
