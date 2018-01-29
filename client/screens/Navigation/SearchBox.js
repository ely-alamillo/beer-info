import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

class SearchBox extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Header searchBar rounded style={{ height: 80 }}>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Enter beer name"
            onChangeText={this.props.onChangeText}
            returnKeyType="search"
            onSubmitEditing={this.props.search}
          />
        </Item>
      </Header>
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

export default SearchBox;
