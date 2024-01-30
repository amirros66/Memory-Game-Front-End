import { Text, View } from "react-native";

export default function GameOverScreen() {
  const firstPlace = "Player 1";
  const secondPlace = "Player 2";
  const thirdPlace = "Player 3";

  return (
    <View>
      <Text>1st Place: {firstPlace}</Text>
      <Text>2nd Place: {secondPlace}</Text>
      <Text>3rd Place: {thirdPlace}</Text>
    </View>
  );
}
