import axios from 'axios';
import { setGameID, setGame } from './slice';
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
		console.log(store.getState().game);
	} catch (error) {
		console.log(error);
	}
};
