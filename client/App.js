import React from 'react';
import expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Landing from './screens/Landing';
import Navigator from './screens/Navigation/Navigator';

const App = StackNavigator(
  {
    Landing: { screen: Landing },
    Home: { screen: Navigator }
  },
  {
    initialRouteName: 'Home'
  }
);

export default App;
