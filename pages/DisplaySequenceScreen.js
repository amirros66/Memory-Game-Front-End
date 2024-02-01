import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplaySequences, selectRound } from "../store/selectors";
import { incrementRound } from "../store/slice";
import { useFocusEffect } from "@react-navigation/native";

export default function DisplaySequenceScreen({ navigation, route }) {
  //For passing as props to input sequence - but need to pass display_sequence_id
  // const { gameID, userID, displaySequenceID } = route.params;
  // const game_id = gameID;
  // const user_id = userID;
  // const display_sequence_id = displaySequenceID;

  const dispatch = useDispatch();
  const displaySequences = useSelector(selectDisplaySequences);
  console.log("Display Sequences:", displaySequences);

  const round = useSelector(selectRound); //round starts at 1
  console.log("Round:", round);

  const convertStringToEmoji = (sequence) => {
    const mapping = {
      left: "⬅️",
      right: "➡️",
      up: "⬆️",
      down: "⬇️",
    };

    return sequence
      .split(",")
      .map((direction) => mapping[direction] || direction)
      .join(" ");
  };

  useEffect(() => {
    // Check if it's time to navigate to the next screen
    if (round <= displaySequences.length) {
      const timer = setTimeout(() => {
        navigation.navigate("InputSequence");
        // Increment round after a delay, right before navigating away
        dispatch(incrementRound());
      }, 10000); // Adjust delay as needed

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [round, navigation, dispatch]);

  // Determine which sequence to display based on the current round
  const sequenceToDisplay = convertStringToEmoji(
    displaySequences[round - 1]?.value || "Sequence not found"
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
        Round {round}
      </Text>
      <Text style={{ fontSize: 25, marginBottom: 40 }}>
        Remember the sequence!
      </Text>
      <Text style={{ fontSize: 40, marginBottom: 200 }}>
        {sequenceToDisplay}
      </Text>
      <CountdownCircleTimer
        isPlaying={true}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={1}
        size={80}
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
