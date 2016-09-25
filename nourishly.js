import React, { Component } from 'react';
import { Container, Header, Title, Content } from 'native-base';
​
export default class NourishlyApp extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>

        <Content>
          This is content
        </Content>
      </Container>
    );
  }
}
