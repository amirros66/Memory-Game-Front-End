import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSelector } from "react-redux";
import {
  selectDisplaySequences,
  selectRound,
  selectUser,
  selectIsGameReady,
} from "../store/selectors";

export default function DisplaySequenceScreen({ navigation, route }) {
  const round = useSelector(selectRound);
  const displaySequences = useSelector(selectDisplaySequences);
  console.log("display sequences:", displaySequences);

  const user = useSelector(selectUser);
  console.log("User:", user);
  const users = useSelector(selectIsGameReady);
  console.log("Users:", users);
  const currentUser = users.find((u) => u.user_id === user);
  console.log("Current user:", currentUser);

  const sequenceIndex = round - 1;
  const currentSequence =
    displaySequences[sequenceIndex]?.value || "Sequence not found";

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

  const sequenceToDisplay = convertStringToEmoji(currentSequence);

  setTimeout(() => {
    navigation.navigate("InputSequence", { round });
  }, 10000);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.gifer.com/7A6q.gif" }}
        style={styles.gifStyle}
      />
      <Text>Player: {currentUser.player_name}</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
        Round {round}
      </Text>
      <Text style={{ fontSize: 25, marginBottom: 40 }}>
        Remember the sequence!
      </Text>
      <Text
        style={{
          fontSize: 40,
          marginBottom: 200,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
  gifStyle: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
