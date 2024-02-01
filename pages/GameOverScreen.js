import { Text, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function GameOverScreen() {
  const dispatch = useDispatch();

  const firstPlace = "Player 1";
  const secondPlace = "Player 2";
  const thirdPlace = "Player 3";

  const { game_id } = route.params;

  const animateText1Ref = useRef(null);
  const animateText2Ref = useRef(null);
  const animateText3Ref = useRef(null);

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
  }, []);

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
        {firstPlace}
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
        {secondPlace}
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
        {thirdPlace}
      </Animatable.Text>
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
