import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSelector } from "react-redux";
import { selectDisplaySequences, selectRound } from "../store/selectors";

export default function DisplaySequenceScreen({ navigation, route }) {
  const round = useSelector(selectRound);

  console.log("Round", round);

  const displaySequences = useSelector(selectDisplaySequences);
  console.log("Display Sequences:", displaySequences);

  // const round = useSelector(selectRound); //round starts at 1
  // console.log("Round:", round);

  // const convertStringToEmoji = (displaySequences) => {
  //   const mapping = {
  //     left: "⬅️",
  //     right: "➡️",
  //     up: "⬆️",
  //     down: "⬇️",
  //   };

  //   return displaySequences
  //     .split(",")
  //     .map((direction) => mapping[direction] || direction)
  //     .join(" ");
  // };

  //displaySequence[] is displaying the sequence by index correctly when hard coded.
  let selectedSequence;

  displaySequences.map((sequence) => {
    if (round == 1) {
      selectedSequence = sequence[0];
      console.log("sequence1:", sequence[0]);
    } else if (round == 2) {
      selectedSequence = sequence[1];
      console.log("sequence2:", sequence[1]);
    } else if (round == 3) {
      selectedSequence = sequence[2];
      console.log("sequence3:", sequence[2]);
    }
  });

  const sequenceToDisplay = selectedSequence;

  setTimeout(() => {
    navigation.navigate("InputSequence", {
      round,
    });
  }, 10000);

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
