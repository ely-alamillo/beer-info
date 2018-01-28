import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Beer Me Now!</Text>
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
