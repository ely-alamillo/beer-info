import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import Search from './Search';
import Favorites from './Favorites';

const Navigator = TabNavigator(
  {
    search: { screen: Search },
    favorites: { screen: Favorites }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('search')}
            >
              <Icon name="search">
                <Text>Search Beer</Text>
              </Icon>
            </Button>

            <Button
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('favorites')}
            >
              <Icon name="star">
                <Text>Favorites</Text>
              </Icon>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default Navigator;
