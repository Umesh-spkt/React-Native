import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const Expenses = (props) => {
   return (
       <View >
      <View style={{backgroundColor:props.bcolor,borderRadius:10,padding:20,flex:1, width:155}}>
          <FontAwesome5 name={props.children} size={50} color={props.iconcolor} />
          <Text style={{fontSize:20}}>{props.amount}</Text>
          <Text style={{color:"#C0C0C0"}}>{props.reason}</Text>

      </View>
      </View>
   )
}

const Transactions = (props)=>{
    return(
        <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', flex:1, flexDirection:"row"}}>
            <FontAwesome5 name={props.children}size={40} color={props.tcolor} />
            <View style={{marginLeft:20}}>
                <Text>{props.spent}</Text>
                <Text style={{ color:"#C0C0C0" }}>{props.type}</Text>
            </View>
        </View>
        <Text>{props.dollar}</Text>
        </View>
    )
}

export {Expenses, Transactions}