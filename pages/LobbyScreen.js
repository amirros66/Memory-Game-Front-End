import { Text, View, StyleSheet } from "react-native";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { selectIsGameReady } from "../store/selectors";

export default function LobbyScreen({ navigation }) {
  // const isGameReady = useSelector(selectIsGameReady);

  // useEffect(() => {
  //   if (isGameReady.length === 3) {
  //     navigation.navigate("Game");
  //   }
  // }, [isGameReady, navigation]);

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 30, marginTop: 40, marginBottom: 40 }}>
        {isGameReady.length === 3
          ? "Starting the game..."
          : `Waiting for all players to start the game... (${isGameReady.length}/3)`}
      </Text> */}
      <Text>
        Waiting for all players to join the lobby before the game starts...
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
