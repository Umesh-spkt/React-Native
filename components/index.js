import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const Expenses = (props) => {
   return (
       <View >
      <View style={{backgroundColor:props.bcolor,borderRadius:5,padding:20,flex:1, alignSelf:'stretch'}}>
          <FontAwesome5 name={props.children} size={50} color={props.iconcolor} />
          <Text style={{fontSize:20}}>{props.amount}</Text>
          <Text style={{color:"#C0C0C0"}}>{props.reason}</Text>

      </View>
      </View>
   )
}

const Transactions = (props)=>{
    return(
        <View style={{flexDirection:'row', flex:1, justifyContent:'space-between', marginTop:20}}>
            <FontAwesome5 name={props.children}size={40} color={props.tcolor} />
            <View>
                <Text>{props.spent}</Text>
                <Text style={{ color: "#C0C0C0" }}>{props.type}</Text>
            </View>

            <Text>{props.dollar}</Text>
        </View>
    )
}

export {Expenses, Transactions}