import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = { title: 'Tab Two' };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home page coming soon!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaacc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
