import { createSlice } from '@reduxjs/toolkit';

initialState = {
	game_id: null,
	user_id: null,
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
			state.game_id = action.payload.game_id;
			state.user_id = action.payload.user_id;
		},
		setUser: (state, action) => {
			state.user_id = action.payload.id;
		},
	},
});

export const { setGame, setGameID } = gameSlice.actions;
export default gameSlice.reducer;
