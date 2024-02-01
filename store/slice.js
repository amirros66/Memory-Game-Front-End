import { createSlice } from '@reduxjs/toolkit';

initialState = {
	game_id: null,
	users: [],
	display_sequences: [],
	round: 1,
};

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameID: (state, action) => {
			state.game_id = action.payload;
		},
		setGame: (state, action) => {
			state.game_id = action.payload.id;
			state.users = action.payload.users;
			state.display_sequences = action.payload.display_sequences;
			state.round = action.payload.round;
		},
	},
});

export const { setGameID } = gameSlice.actions;
export default gameSlice.reducer;
