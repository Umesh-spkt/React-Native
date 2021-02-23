import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React,{useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text,View,Modal } from 'react-native';
import {Item, TopBar} from './components';



export default function App() {


  return (
    <View style={styles.container}>
      

      <StatusBar hidden/>
      <TopBar/>
     
    <View style={styles.body}>
      <Item/>
      </View>
      

      
      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DEDACA',
    flexDirection:'column',
  },
  body:{
    padding:20,
    flex:0.9
  },
  


 
})