import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinalResultsThunk, gameOverThunk } from "../store/thunks";
import {
  selectActiveGameID,
  selectFinalResults,
  selectLoading,
} from "../store/selectors";

export default function GameOverScreen({ navigation }) {
  const dispatch = useDispatch();

  const game_id = useSelector(selectActiveGameID);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getFinalResultsThunk(game_id));
  }, [dispatch, game_id]);

  const finalResults = useSelector(selectFinalResults);
  console.log("Final Results:", finalResults);

  useEffect(() => {
    if (animateText1Ref.current) {
      animateText1Ref.current.bounceIn();
      setTimeout(() => {
        if (animateText2Ref.current) {
          animateText2Ref.current.bounceIn();
          setTimeout(() => {
            if (animateText3Ref.current) {
              animateText3Ref.current.bounceIn();
            }
          }, 2000);
        }
      }, 4000);
    }
  }, [finalResults]);

  const animateText1Ref = useRef(null);
  const animateText2Ref = useRef(null);
  const animateText3Ref = useRef(null);

  const sortedResults = [...finalResults].sort(
    (a, b) => b.total_correct_guesses - a.total_correct_guesses
  );

  const firstPlace = sortedResults[0];
  const secondPlace = sortedResults[1];
  const thirdPlace = sortedResults[2];
  console.log("First Place:", firstPlace);
  console.log("Second Place:", secondPlace);
  console.log("Third Place:", thirdPlace);

  const handleGameOver = () => {
    if (game_id) {
      dispatch(gameOverThunk(game_id));
      navigation.navigate("Home");
    } else {
      navigation.navigate("Home");
    }
  };

  if (!finalResults || loading || finalResults.length === 0) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
        🥇1st Place🥇
      </Text>
      <Animatable.Text
        ref={animateText1Ref}
        animation="bounceIn"
        iterationCount={4}
        style={{ fontSize: 30, marginBottom: 15 }}
      >
        {firstPlace.player_name}
      </Animatable.Text>
      <Text style={{ fontSize: 37, fontWeight: "bold", marginBottom: 15 }}>
        🥈2nd Place🥈
      </Text>
      <Animatable.Text
        ref={animateText2Ref}
        animation="bounceIn"
        iterationCount={2}
        style={{ fontSize: 30, marginBottom: 15 }}
      >
        {secondPlace.player_name}
      </Animatable.Text>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 15 }}>
        🥉3rd Place🥉
      </Text>
      <Animatable.Text
        ref={animateText3Ref}
        animation="bounceIn"
        iterationCount={2}
        style={{ fontSize: 30, marginBottom: 15 }}
      >
        {thirdPlace.player_name}
      </Animatable.Text>
      <Button title="GAME OVER" onPress={handleGameOver}></Button>
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
