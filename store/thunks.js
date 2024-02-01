import axios from 'axios';
import { setGameID } from './slice';

const API_BASE_URL = 'http://192.168.68.59:8000';

export const fetchActiveGame = () => async (dispatch) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/game/active`);
		const game = response.data;
		dispatch(setGameID(game.id));
	} catch (error) {
		dispatch(setGameID(null));
	}
};
