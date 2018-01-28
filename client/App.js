import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';

const App = StackNavigator({
  Home: { screen: Home }
});

export default App;
