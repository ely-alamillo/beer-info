import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'native-base';

class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  mainTitle: {
    marginBottom: 10
  },
  button: {
    padding: 10
  }
});

export default Favorites;
