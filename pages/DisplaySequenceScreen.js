import { Text, View, StyleSheet } from 'react-native';

export default function DisplaySequenceScreen() {
	// Replace with dynamic values
	const round = 1;
	const sequence = '⬅️ ⬆️ ⬇️ ➡️';

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>
				Round {round}
			</Text>
			<Text style={{ fontSize: 20, marginBottom: 40 }}>
				Remember the sequence!
			</Text>
			<Text style={{ fontSize: 40 }}>{sequence}</Text>
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
