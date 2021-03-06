/* @flow */

import React, { Component } from 'react';
import {StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImage extends Component {
  render() {
    return (
      <Container>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./profilepic.jpeg')} />
                  <Body>
                    <Text>Hitesh Chaudhary</Text>
                    <Text note>My Profile Pic</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('./profilepic.jpeg')} style={{height: 200, width: null, flex: 1, borderRadius: 30}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
