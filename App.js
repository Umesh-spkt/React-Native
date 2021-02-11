import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.view1}>
        <Text style={styles.text}>Conversation</Text>
      </View>
      <View style ={styles.view2}>
      <Text style={styles.text}>Conversation1</Text>
      <Text style={styles.text}>Conversation2</Text>
      <Text style={styles.text}>Conversation3</Text>
      </View>
      <View style ={styles.view3}>
        <Text style={styles.text}>A</Text>
        <Text style={styles.text}>B</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>C</Text>
        <Text style={styles.text}>D</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection:'column',
  },

  view1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f00'
  },
  view2:{
    flex:8,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:'#0f0'
  },
  view3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#00f'
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'

  },
  view4:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    backgroundColor:'#00f'
  }

})