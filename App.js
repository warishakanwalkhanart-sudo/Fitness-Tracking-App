import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ExerciseDetailScreen from './screens/ExerciseDetailScreen';
import AddExerciseScreen from './screens/AddExerciseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{  title: '🏋️My Fitness Tracker' }}
        />

        <Stack.Screen
          name="Details"
          component={ExerciseDetailScreen}
          options={{ title: 'Exercise Details' }}
        />

        <Stack.Screen
          name="AddExercise"
          component={AddExerciseScreen}
          options={{ title: 'Add Exercise' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

















