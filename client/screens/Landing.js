import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Landing page Coming Soon!</Text>
        <View>
          <Button style={styles.button}>
            <Text>Find Some Beers Yo!</Text>
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
  button: {
    flexDirection: 'row',
    backgroundColor: 'red'
  }
});

export default Landing;
