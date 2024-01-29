import { Button, View } from "react-native";

// useEffect to dispatch a thunk that fetches if the game is active or not.
// if active, join a game. else start a game

export default function HomeScreen() {
  return (
    <View>
      <Button>Start a game</Button>
      <Button>Join a game</Button>
    </View>
  );
}
