import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import CardImage from './components/CardImage'

export default class App extends Component  {

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
    render(){
  return (

    <CardImage></CardImage>


  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
