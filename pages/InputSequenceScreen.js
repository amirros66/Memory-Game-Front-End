import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import React, { useState, useEffect } from "react";

export default function InputSequenceScreen({ navigation }) {
  // Replace with dynamic values
  const round = 1;

  const [arrows, setArrows] = useState([]);
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  useEffect(() => {
    if (countdownCompleted) {
      setTimeout(() => {
        navigation.navigate("Results");
      }, 1500);
    }
  }, [countdownCompleted, arrows, navigation]);

  const handleButtonPress = (arrow) => {
    if (arrows.length < 4) {
      setArrows((prevArrows) => [...prevArrows, arrow]);
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
