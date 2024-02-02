import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchActiveGame, createGame, joinGame } from '../store/thunks';
import { selectActiveGameID } from '../store/selectors';

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
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			{gameID ? (
				<Button title="Join a game" onPress={handleJoinGame} />
			) : (
				<Button title="Start a game" onPress={handleStartGame} />
			)}

			{/* Other buttons for testing and navigation */}
			<Button
				title="Lobby"
				onPress={() => navigation.navigate('Lobby')}
			/>
			<Button
				title="Display Sequence"
				onPress={() => navigation.navigate('DisplaySequence')}
			/>
			<Button
				title="Input Sequence"
				onPress={() => navigation.navigate('InputSequence')}
			/>
			<Button
				title="Results"
				onPress={() => navigation.navigate('Results')}
			/>
			<Button
				title="GameOver"
				onPress={() => navigation.navigate('GameOver')}
			/>
			<Button title="Game" onPress={() => navigation.navigate('Game')} />
		</View>
	);
}
