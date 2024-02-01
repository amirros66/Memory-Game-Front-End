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
	},
});

export const { setGameID } = gameSlice.actions;
export default gameSlice.reducer;
