import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './pages/GameScreen';
import DisplaySequenceScreen from './pages/DisplaySequenceScreen';
import InputSequenceScreen from './pages/InputSequenceScreen';
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Game" component={GameScreen} />
				<Stack.Screen
					name="DisplaySequence"
					component={DisplaySequenceScreen}
				/>
				<Stack.Screen
					name="InputSequence"
					component={InputSequenceScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
