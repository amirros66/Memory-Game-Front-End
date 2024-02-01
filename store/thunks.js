import axios from 'axios';
import { setGameID, setGame, setUserID } from './slice';
import store from './index';

const API_BASE_URL = 'http://192.168.68.59:8000';

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
		const response = await axios.post(`${API_BASE_URL}/game/${gameID}`);
		const user = response.data;
		dispatch(setUserID(user));
	} catch (error) {
		console.log(error);
	}
};
