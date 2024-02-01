import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplaySequences, selectRound } from "../store/selectors";
import { incrementRound } from "../store/slice";

export default function DisplaySequenceScreen({ navigation, route }) {
  //For passing as props to input sequence - but need to pass display_sequence_id
  // const { gameID, userID, displaySequenceID } = route.params;
  // const game_id = gameID;
  // const user_id = userID;
  // const display_sequence_id = displaySequenceID;

  const dispatch = useDispatch();
  const displaySequences = useSelector(selectDisplaySequences);
  console.log("Display Sequences:", displaySequences);

  const round = useSelector(selectRound);

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

  // useEffect(() => {
  //   console.log("Display Sequences:", displaySequences);
  //   if (currentSequenceIndex < displaySequences.length) {
  //     const timer = setTimeout(() => {
  //       setCurrentSequenceIndex((index) => index + 1); // Increment after timer
  //       navigation.navigate("InputSequence");
  //     }, 10000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [currentSequenceIndex, displaySequences, navigation]);

  // const sequenceToDisplay = convertStringToEmoji(
  //   displaySequences[currentSequenceIndex]?.value || "Sequence not found"
  // );

  // const displaySequence = useSelector(selectDisplaySequences);
  // console.log("Display Sequence:", displaySequence);
  // //Round 1. [1] would be round 2, [2] would be round 3 how do I get this to increment
  // //each time this page is navigated to ?
  // //Round goes by display sequence index not display sequence ID.
  // //If statement - if statement with [0] - round one.

  // const rawSequence = displaySequence[0]?.value || "Sequence not found";
  // console.log("Raw Sequence:", rawSequence);

  // const sequenceToDisplay = convertStringToEmoji(rawSequence);

  // // Replace with dynamic values
  // const round = 1;

  //Pass game id + user id as props to input sequence page.
  // setTimeout(() => {
  //   navigation.navigate("InputSequence", { gameID: game_id, userID: user_id, displaySequenceID: display_sequence_id }, );
  // }, 10000);

  useEffect(() => {
    console.log("Display Sequences:", displaySequences);
    console.log("Current Round:", round);

    if (round - 1 < displaySequences.length) {
      const timer = setTimeout(() => {
        navigation.navigate("InputSequence");
        dispatch(incrementRound()); // Increment the round for the next visit
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [round, displaySequences, navigation, dispatch]);

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
