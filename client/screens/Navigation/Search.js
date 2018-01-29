import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { Container, Content } from 'native-base';
import axios from 'axios';

import SeachBox from './SearchBox';

class Search extends Component {
  static navigationOptions = { header: null };
  state = {
    beer: '',
    beerInfo: ''
  };

  search = () => {
    Keyboard.dismiss();
    const beer = this.state.beer.toLowerCase();
    const API = `http://api.brewerydb.com/v2/search?q=${beer}&type=beer&key=f721b2bf3a3baf51e2bc9407c39b53ed`;
    axios
      .get(API)
      .then(beers => {
        const info = beers.data.data;
      })
      .catch(err => alert('there was an error'));
  };

  render() {
    return (
      <Container>
        <SeachBox
          value={this.state.beer}
          onChangeText={beer => this.setState({ beer })}
          search={this.search}
        />
        <Content />
      </Container>
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

export default Search;
