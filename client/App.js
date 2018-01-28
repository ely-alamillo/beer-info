import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Landing from './screens/Landing';

const App = StackNavigator({
  Landing: { screen: Landing },
  Home: { screen: Home }
});

export default App;
