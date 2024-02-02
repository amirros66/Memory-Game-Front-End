import { Button, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchActiveGame, createGame, joinGame } from '../store/thunks';
import { selectActiveGameID } from '../store/selectors';
import clefairyboard from '../assets/clefairyboard.jpeg';

export default function HomeScreen({ navigation }) {
	const dispatch = useDispatch();
	const gameID = useSelector(selectActiveGameID);
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		// Function to fetch active game
		const fetchGame = () => {
			dispatch(fetchActiveGame());
		};

		// Start fetching the active game every second
		const id = setInterval(fetchGame, 1000);
		setIntervalId(id);

		return () => {
			// Clear the interval when the component unmounts
			clearInterval(id);
		};
	}, [dispatch]);

	const stopFetching = () => {
		// Clear the interval when a game is joined or started
		clearInterval(intervalId);
	};

	function handleStartGame() {
		stopFetching(); // Stop fetching when starting a game
		dispatch(createGame(navigation));
	}

	function handleJoinGame() {
		stopFetching(); // Stop fetching when joining a game
		dispatch(joinGame(gameID));
		navigation.navigate('Lobby', { gameID: gameID });
	}

	return (
		<>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
				}}
			>
				<Image
					source={clefairyboard}
					style={{ width: 400, height: 400, marginBottom: 40 }}
				/>
				{gameID ? (
					<Button title="Join a game" onPress={handleJoinGame} />
				) : (
					<Button title="Start a game" onPress={handleStartGame} />
				)}
			</View>
		</>
	);
}
