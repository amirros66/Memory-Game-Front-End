import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import LobbyScreen from "./pages/LobbyScreen";
import GameScreen from "./pages/GameScreen";
import DisplaySequenceScreen from "./pages/DisplaySequenceScreen";
import InputSequenceScreen from "./pages/InputSequenceScreen";
import ResultsScreen from "./pages/ResultsScreen";
import GameOverScreen from "./pages/GameOverScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lobby" component={LobbyScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen
          name="DisplaySequence"
          component={DisplaySequenceScreen}
        />
        <Stack.Screen name="InputSequence" component={InputSequenceScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="GameOver" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
