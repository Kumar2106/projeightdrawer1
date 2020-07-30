import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Image,StyleSheet, View } from 'react-native';
import { AppLoading } from "expo";
import { Drawer } from 'native-base';
import { Container,Title, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import CardImage from './components/CardImage'
import FooterBadge from './components/FooterBadge'
import SideBar from './components/SideBar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  closeDrawer = () => {
  this.drawer._root.close()
    }

  openDrawer = () => {
    this.drawer._root.open()
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }


    return (

<Drawer ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >

        <Container>
        <Header>
        <Left>
        <Button transparent onPress = {()=> this.openDrawer()}>
         <Icon name='menu' />
         </Button>
         </Left>
         <Body>
         <Title>Side Bar </Title>
         </Body>
         <Right>
         <Button transparent>
         <Icon name='camera' />
         </Button>
         </Right>
         </Header>
         <CardImage/>
         </Container>
         <FooterBadge/>
        </Drawer>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff'
  },
});
