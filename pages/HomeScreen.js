import { Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchActiveGame, createGame, joinGame } from "../store/thunks";
import { selectActiveGameID } from "../store/selectors";

// useEffect to dispatch a thunk that fetches if the game is active or not.
// if active, join a game. else start a game
// when either button is pressed, make a post request to add a new user/player

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const gameID = useSelector(selectActiveGameID);

  useEffect(() => {
    dispatch(fetchActiveGame());
  });

  function handleStartGame() {
    dispatch(createGame(navigation));
  }

  function handleJoinGame() {
    dispatch(joinGame(gameID));
    navigation.navigate("Lobby", { gameID: gameID });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {gameID ? (
        <Button title="Join a game" onPress={handleJoinGame} />
      ) : (
        <Button title="Start a game" onPress={handleStartGame} />
      )}
    </View>
  );
}
