/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {  Button } from 'native-base';

export default class SideBar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style= {styles.text}> SideBar </Text>
        <Image source = {require('./profilepic.jpeg')} style = {styles.topImage}/>
        <Button style={styles.button} block light><Text> Light </Text></Button>
          <Button style={styles.button} block primary><Text> Primary </Text></Button>
          <Button style={styles.button} block success><Text> Success </Text></Button>
          <Button style={styles.button} block info><Text> Info </Text></Button>
          <Button style={styles.button} block warning><Text> Warning </Text></Button>
          <Button style={styles.button} block danger><Text> Danger </Text></Button>
          <Button style={styles.button} block dark><Text> Dark </Text></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    marginRight: 5
  },
  text:{
    color: '#fff',
    marginTop: 50,
    marginLeft: 10,
    textAlign: 'center'
  },
  topImage:{
    width: '100%',
    height: 100,
    margin: 10,
    opacity: 0.7,


  },
  button:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
