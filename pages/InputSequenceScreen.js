import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputSequenceThunk } from "../store/thunks";
import { selectDisplaySequences } from "../store/selectors";

export default function InputSequenceScreen({ navigation }) {
  const dispatch = useDispatch();

  //  const displaySequences = useSelector(selectDisplaySequences);
  // change to dynamic values
  const round = 1;

  const display_sequence_id = 25;
  const user_id = 12;

  const [arrows, setArrows] = useState([]);
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [arrowValues, setArrowValues] = useState([]);
  const [finalArrowValues, setFinalArrowValues] = useState([]);

  let value;

  if (round === 1 && countdownCompleted) {
    value = arrowValues.length < 5 ? arrowValues.join(",") : null;
    console.log("Value:", value);
  } else if (round === 2 && countdownCompleted) {
    value = arrowValues.length < 7 ? arrowValues.join(",") : null;
    console.log("Value:", value);
  } else if (round === 3 && countdownCompleted) {
    value = arrowValues.length < 9 ? arrowValues.join(",") : null;
    console.log("Value:", value);
  }

  useEffect(() => {
    if (countdownCompleted) {
      setFinalArrowValues(arrowValues);
      dispatch(setInputSequenceThunk(user_id, display_sequence_id, value));
      setTimeout(() => {
        navigation.navigate("Results");
      }, 1500);
    }
  }, [countdownCompleted, arrowValues, navigation]);

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

    let maxArrows;

    switch (round) {
      case 1:
        maxArrows = 4;
        break;
      case 2:
        maxArrows = 6;
        break;
      case 3:
        maxArrows = 8;
        break;
      default:
        maxArrows = 4;
    }

    if (arrowValue && arrows.length < maxArrows) {
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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
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
