import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Text
} from 'native-base';

export default class NourishlyApp extends Component {
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
