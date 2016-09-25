/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text
} from 'native-base';

class NourishlyApp extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>
        <Content>
          <Text>Some Content</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NourishlyApp', () => NourishlyApp);
