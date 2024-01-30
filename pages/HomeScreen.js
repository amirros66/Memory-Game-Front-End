import { Button, View } from "react-native";

// useEffect to dispatch a thunk that fetches if the game is active or not.
// if active, join a game. else start a game
// when either button is pressed, make a post request to add a new user/player

export default function HomeScreen({ navigation }) {
  function handleStartGame() {
    //dispatch thunk to start game
    navigation.navigate("Game");
  }

  function handleJoinGame() {
    //dispatch thunk to join game
    navigation.navigate("Game");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Start a game" onPress={handleStartGame} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Join a game" onPress={handleJoinGame} />

      {/*FOR TESTING PURPOSES ONLY */}
      <Button
        title="Display Sequence"
        onPress={() => navigation.navigate("DisplaySequence")}
      />
      <Button
        title="Input Sequence"
        onPress={() => navigation.navigate("InputSequence")}
      />
    </View>
  );
}
