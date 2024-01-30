import { Text, View, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function DisplaySequenceScreen({ navigation }) {
	// Replace with dynamic values
	const round = 1;
	const sequence = '⬅️ ⬆️ ⬇️ ➡️';

	setTimeout(() => {
		navigation.navigate('InputSequence'); //this.props.navigation.navigate('Login')
	}, 10000);

	return (
		<View style={styles.container}>
			<Text
				style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 15 }}
			>
				Round {round}
			</Text>
			<Text style={{ fontSize: 25, marginBottom: 40 }}>
				Remember the sequence!
			</Text>
			<Text style={{ fontSize: 40, marginBottom: 200 }}>{sequence}</Text>
			<CountdownCircleTimer
				isPlaying={true}
				duration={10}
				colors={['#004777', '#F7B801', '#A30000', '#A30000']}
				colorsTime={[10, 6, 3, 0]}
				onComplete={() => ({ shouldRepeat: true, delay: 2 })}
				updateInterval={1}
				size={80}
			>
				{({ remainingTime, color }) => (
					<Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
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
