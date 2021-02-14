import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const FoodMenu =(props)=>{
    return(
    <View style={{ justifyContent:'flex-start', marginRight:20}}>
        <View style={{ width:70, height:75,backgroundColor:'#f0f0f0', resizeBy:'cover', borderRadius:50, alignItems:'center', justifyContent:'center',paddingVertical:10}}><Ionicons name={props.children}size={30} color="red" /></View>
        <Text style={{textAlign:'center', marginTop:10}}>{props.food}</Text>
    </View>
    );
}

const Foodhead =(props)=>{
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {props.children}
      </Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                    width: props.length ,
                    marginBottom:20,
                }}
            />
        </View>
    );
}


const Food= (props)=>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
           <View style={{marginBottom:5, flexDirection:'row'}}>
                <Image style={{width:100, height:115, borderRadius:40, resizeMode:'cover'}} 
                source={{uri:props.children}}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{props.fname}</Text>
            <Text style={{color:'gray', width:200, textAlign:'justify', padding:5}}>{props.desc}</Text>
            </View>
            </View>

            <View>
            <Ionicons name="add-circle-sharp" size={48} color="red" />
            <Text style={{fontSize:15, fontWeight:"bold"}}>{props.price}</Text>

            </View>
           

        </View>
    )
}

const Foodimg = (props)=>{
    return(
        <View>
             <Image style={{height:210, width:160, borderRadius:15, marginRight:20}}
          source={
            {
              uri:props.children
            }} />

        </View>
    )
}
export {FoodMenu,Foodhead,Foodimg, Food};