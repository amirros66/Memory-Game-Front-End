import { Text, View, StyleSheet } from "react-native";

export default function GameOverScreen() {
  const firstPlace = "Player 1";
  const secondPlace = "Player 2";
  const thirdPlace = "Player 3";

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
        🥇1st Place🥇
      </Text>
      <Text style={{ fontSize: 30, marginBottom: 15 }}>{firstPlace}</Text>
      <Text style={{ fontSize: 37, fontWeight: "bold", marginBottom: 15 }}>
        🥈2nd Place🥈
      </Text>
      <Text style={{ fontSize: 30, marginBottom: 15 }}>{secondPlace}</Text>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 15 }}>
        🥉3rd Place🥉
      </Text>
      <Text style={{ fontSize: 30, marginBottom: 15 }}>{thirdPlace}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
