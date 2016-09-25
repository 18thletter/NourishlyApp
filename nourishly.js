import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Content
} from 'native-base';

export default class NourishlyApp extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>Inspirefly</Title>

          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>

        <Content>
          <Title>Recognize</Title>
        </Content>
      </Container>
    );
  }
}
