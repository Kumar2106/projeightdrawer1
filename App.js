import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Image,StyleSheet, View } from 'react-native';
import { AppLoading } from "expo";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import CardImage from './components/CardImage'
import FooterBadge from './components/FooterBadge'

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

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style = {styles.container}>
      <CardImage/>
      <FooterBadge/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff'
  },
});
