import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
// import SearchScreen from "./src/screens/SearchScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search : SearchScreen,
  ResultsShow : ResultsShowScreen
},{
  initialRouteName : 'Search',
  defaultNavigationOptions: {
    title : 'Restaurant Search'
  }
});

export default createAppContainer(navigator);


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Restaurant Search"
//       >
//         <Stack.Screen name="Restaurant Search" component={SearchScreen} />
//         <Stack.Screen name="Results Show" component={ResultsShowScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;