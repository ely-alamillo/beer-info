import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainTitle}>
          <Text>Landing page Coming Soon!</Text>
        </View>
        <View>
          <Button light style={styles.button}>
            <Text>Find Beers!</Text>
          </Button>
        </View>
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

export default Landing;
