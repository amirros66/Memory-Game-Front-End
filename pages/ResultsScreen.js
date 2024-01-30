import { Text, View, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function ResultsScreen() {
	const p1Score = [1, 3];
	const p2Score = [2, 4];
	const p3Score = [3, 5];

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 36, marginBottom: 20 }}>Player 1</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p1Score[0]} ✅
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p1Score[1]} ❌
			</Text>
			<Text style={{ fontSize: 36, marginBottom: 20 }}>Player 2</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p2Score[0]} ✅
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p2Score[1]} ❌
			</Text>
			<Text style={{ fontSize: 36, marginBottom: 20 }}>Player 3</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p3Score[0]} ✅
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 20 }}>
				{p3Score[1]} ❌
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 20, marginTop: 20 }}>
				Next round begins in...
			</Text>
			<CountdownCircleTimer
				isPlaying={true}
				duration={15}
				colors={['#004777', '#F7B801', '#A30000', '#A30000']}
				colorsTime={[10, 6, 3, 0]}
				onComplete={() => ({ shouldRepeat: true, delay: 2 })}
				updateInterval={1}
				size={80}
			>
				{({ remainingTime, color }) => (
					<Text style={{ color, fontSize: 20 }}>{remainingTime}</Text>
				)}
			</CountdownCircleTimer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
});
