import { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { getResultsThunk } from "../store/thunks";
import { setRound } from "../store/slice";
import { selectResults, selectLoading } from "../store/selectors";

export default function ResultsScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const { round, display_sequence_id } = route.params;

  const user = useSelector(selectUser);
  console.log("User:", user);
  const users = useSelector(selectIsGameReady);
  console.log("Users:", users);
  const currentUser = users.find((u) => u.user_id === user);
  console.log("Current user:", currentUser);

  const results = useSelector(selectResults);
  console.log("Results from selector:", results);

  const scoresArray = results && results.scores;

  const p1 = scoresArray && scoresArray.length > 0 ? scoresArray[0] : null;
  console.log("p1:", p1);

  const p2 = scoresArray && scoresArray.length > 1 ? scoresArray[1] : null;
  console.log("p2:", p2);

  const p3 = scoresArray && scoresArray.length > 2 ? scoresArray[2] : null;
  console.log("p3:", p3);

  setTimeout(() => {
    if (round < 3) {
      dispatch(setRound(round + 1)); // increment round
      navigation.navigate("DisplaySequence");
    } else {
      navigation.navigate("GameOver");
    }
  }, 15000);

  useEffect(() => {
    dispatch(getResultsThunk(display_sequence_id));
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text>Player: {currentUser.player_name}</Text>
      <Text style={{ fontSize: 36, marginBottom: 20 }}>Player 1</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p1.correct_guesses} ✅
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p1.incorrect_guesses} ❌
      </Text>
      <Text style={{ fontSize: 36, marginBottom: 20 }}>Player 2</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p2.correct_guesses} ✅
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p2.incorrect_guesses} ❌
      </Text>
      <Text style={{ fontSize: 36, marginBottom: 20 }}>Player 3</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p3.correct_guesses} ✅
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {p3.incorrect_guesses} ❌
      </Text>
      {round < 3 && (
        <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 20 }}>
          Next round begins in...
        </Text>
      )}
      <CountdownCircleTimer
        isPlaying={true}
        duration={15}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={1}
        size={80}
      >
        {({ remainingTime, color }) => (
          <Text style={{ color, fontSize: 20 }}>{remainingTime}</Text>
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
