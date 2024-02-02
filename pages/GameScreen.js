import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDisplaySequencesThunk } from "../store/thunks";
import { useNavigation } from "@react-navigation/native";
import {
  selectActiveGameID,
  selectIsGameReady,
  selectUser,
} from "../store/selectors";

export default function GameScreen(route) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector(selectUser);
  console.log("User:", user);
  const users = useSelector(selectIsGameReady);
  console.log("Users:", users);
  const currentUser = users.find((u) => u.user_id === user);
  console.log("Current user:", currentUser);

  const game_id = useSelector(selectActiveGameID);

  useEffect(() => {
    dispatch(getDisplaySequencesThunk(game_id));
  }, [dispatch]);

  setTimeout(() => {
    navigation.navigate("DisplaySequence");
  }, 10000);

  return (
    <View style={styles.container}>
      <Text>Player: {currentUser.player_name}</Text>
      <Text style={{ fontSize: 36, marginBottom: 40 }}>
        Game starts in....{" "}
      </Text>
      <CountdownCircleTimer
        isPlaying={true}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={1}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
