import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import React, { useState, useEffect } from "react";

// use selector to get display disequences
// use index of display sequence to get round
// round = displaysequenceindex -1
// if round = 1 --> < 4
// if round = 2 --> < 6
// if round = 3 --> < 8

export default function InputSequenceScreen({ navigation }) {
  const round = 1;

  const [arrows, setArrows] = useState([]);
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [arrowValues, setArrowValues] = useState([]);
  const [finalArrowValues, setFinalArrowValues] = useState([]);

  useEffect(() => {
    if (countdownCompleted) {
      setFinalArrowValues(arrowValues);
      console.log(arrowValues);
      setTimeout(() => {
        navigation.navigate("Results");
      }, 1500);
    }
  }, [countdownCompleted, finalArrowValues, navigation]);

  const handleButtonPress = (arrow) => {
    let arrowValue = "";

    switch (arrow) {
      case "⬆️":
        arrowValue = "up";
        break;
      case "⬇️":
        arrowValue = "down";
        break;
      case "⬅️":
        arrowValue = "left";
        break;
      case "➡️":
        arrowValue = "right";
        break;
      default:
        arrowValue = "";
    }

    if (arrowValue && arrows.length < 4) {
      setArrows((prevArrows) => [...prevArrows, arrow]);
      setArrowValues((prevArrowValues) => [...prevArrowValues, arrowValue]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleButtonPress(null)}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
          Round {round}
        </Text>
        <CountdownCircleTimer
          isPlaying={true}
          duration={15}
          colors={["#A30000", "#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 10, 6, 3, 0]}
          onComplete={() => setCountdownCompleted(true)}
          updateInterval={1}
          size={80}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button title="⬆️" onPress={() => handleButtonPress("⬆️")} />
          <Button title="⬇️" onPress={() => handleButtonPress("⬇️")} />
          <Button title="⬅️" onPress={() => handleButtonPress("⬅️")} />
          <Button title="➡️" onPress={() => handleButtonPress("➡️")} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          {arrows.map((arrow, index) => (
            <Text key={index} style={{ fontSize: 40, marginRight: 10 }}>
              {arrow}
            </Text>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
