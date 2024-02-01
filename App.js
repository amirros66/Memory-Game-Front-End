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
import { Provider } from "react-redux";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Lobby"
            component={LobbyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DisplaySequence"
            component={DisplaySequenceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InputSequence"
            component={InputSequenceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOverScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
