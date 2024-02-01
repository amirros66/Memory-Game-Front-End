import { Text, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectIsGameReady } from "../store/selectors";
import { getUsersThunk } from "../store/thunks";

export default function LobbyScreen({ navigation }) {
  const dispatch = useDispatch();

  const isGameReady = useSelector(selectIsGameReady);
  const game_id = 10;

  useEffect(() => {
    if (isGameReady.length === 3) {
      navigation.navigate("Game");
    } else {
      const intervalId = setInterval(() => {
        dispatch(getUsersThunk(game_id));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isGameReady, dispatch, game_id, navigation]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: 40, marginBottom: 40 }}>
        {isGameReady.length === 3
          ? "Starting the game..."
          : `Waiting for all players to start the game... (${isGameReady.length}/3 players ready)`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
  },
});
