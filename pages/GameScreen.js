import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function GameScreen() {
	const [isPlaying, setIsPlaying] = React.useState(true);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 36, marginBottom: 40 }}>
				Game starts in....{' '}
			</Text>
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={10}
				colors={['#004777', '#F7B801', '#A30000', '#A30000']}
				colorsTime={[10, 6, 3, 0]}
				onComplete={() => ({ shouldRepeat: true, delay: 2 })}
				updateInterval={1}
			>
				{({ remainingTime, color }) => (
					<Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
				)}
			</CountdownCircleTimer>
			<Button
				title="Toggle Playing"
				onPress={() => setIsPlaying((prev) => !prev)}
			/>
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
