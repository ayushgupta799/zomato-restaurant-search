// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer , createStackNavigator } from 'react-navigation';
// import SearchScreen from "./src/screens/SearchScreen";

// const navigator = createStackNavigator({
//   Search : SearchScreen
// },{
//   initialRouteName : 'Search',
//   defaultNavigationOptions: {
//     title : 'Business Search'
//   }
// });

// export default createAppContainer(navigator);


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurant Search" component={SearchScreen} />
        <Stack.Screen name="Results Show" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;