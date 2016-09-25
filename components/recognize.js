import React, { Component } from 'react';
import {
  Content,
  Text,
  Header,
  Title
} from 'native-base';

export default class RecognizeScreen extends Component {
  render() {
    return (
      <Header>
        <Title>Sample title</Title>
      </Header>

      <Content>
        <Text>Some Content</Text>
      </Content>
    );
  }
}
