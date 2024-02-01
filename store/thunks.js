import axios from 'axios';
import { API_BASE_URL } from '../.env';
import { setGameID, setGame, setUserID, setDisplaySequences } from './slice';

export const fetchActiveGame = () => async (dispatch) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/game/active`);
		const game = response.data;
		dispatch(setGameID(game.id));
	} catch {
		dispatch(setGameID(null));
	}
};

export const createGame = () => async (dispatch) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/game`);
		const game = response.data;
		dispatch(setGame(game));
		console.log(game);
	} catch (error) {
		console.log(error);
	}
};

// Creates new user belonging to active game (game_id)
export const joinGame = (gameID) => async (dispatch) => {
	try {
		console.log(gameID);
		const response = await axios.post(`${API_BASE_URL}/users/${gameID}`);
		const user = response.data;
		dispatch(setUserID(user));
	} catch (error) {
		console.log(error);
	}
};

export const getDisplaySequencesThunk = (game_id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${API_BASE_URL}/display-sequences?game_id=${game_id}`
			);
			const display_sequences = response.data;
			dispatch(setDisplaySequences(display_sequences));
			console.log('Display Sequences:', display_sequences);
		} catch (error) {
			console.log('Error:', error);
		}
	};
};
