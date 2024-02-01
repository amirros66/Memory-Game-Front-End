import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useSelector } from "react-redux";
import { selectDisplaySequences, selectUserId } from "../store/selectors";
// import { selectDisplaySequencesById } from "../store/selectors";

export default function DisplaySequenceScreen({ navigation }) {
  //For passing as props to input sequence - but need to pass display_sequence_id
  // const user_id = useSelector(selectUserId);
  // // const display_sequence = useSelector(selectDisplaySequences);
  // const display_sequence_id = useSelector(selectDisplaySequencesById);

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

  const displaySequence = useSelector(selectDisplaySequences);
  console.log("Display Sequence:", displaySequence);
  //Round 1. [1] would be round 2, [2] would be round 3 how do I get this to increment
  //each time this page is navigated to ?
  const rawSequence = displaySequence[0]?.value || "Sequence not found";
  console.log("Raw Sequence:", rawSequence);

  const sequenceToDisplay = convertStringToEmoji(rawSequence);

  // Replace with dynamic values
  const round = 1;

  //This is to pass down as props
  // setTimeout(() => {
  //   navigation.navigate("InputSequence", { user_id, display_sequence_id });
  // }, 10000);

  setTimeout(() => {
    navigation.navigate("InputSequence");
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
