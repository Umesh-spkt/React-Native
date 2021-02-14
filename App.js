import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Foodhead, Foodimg, FoodMenu, Food} from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.iconbar}>
        <Ionicons name="cellular" size={24} color="black" />
        <FontAwesome style={styles.iconmargin} name="wifi" size={24} color="black" />
        <FontAwesome name="battery-4" size={24} color="black" />
      </View>

      <View style={styles.view1}>
        <Ionicons name="location-sharp" size={25} color="red" />
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>2142,Kapan KTM, NP</Text>
      </View>

      <View style={styles.view2}>

        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Ionicons name="search" size={24} color="gray" style={{ marginLeft: 12 }} />
          <Text style={{ marginHorizontal: 25, color: "gray", fontSize: 18 }}>Search Food</Text>
        </View>
        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={50} color="red" />
      </View>

      <View style={styles.view3}>
        <FoodMenu food="Asian food">fast-food-outline</FoodMenu>
        <FoodMenu food="American">fast-food-outline</FoodMenu>
        <FoodMenu food="Burger">fast-food-outline</FoodMenu>
        <FoodMenu food="Pizza">fast-food-outline</FoodMenu>
      </View>

      <View style={styles.view4}>
        <Foodhead length={70}>Recommended Deals</Foodhead>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Foodimg>https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Foodimg>
          <Foodimg>https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Foodimg>
          
        </View>

      </View>

      <View style={styles.view5}>
        <Foodhead length={40}>Other food</Foodhead>
        <Food price="$100" fname="Chinese Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food price="$200"fname="Nepali Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food>https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    padding: 10
  },
  iconbar: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  iconmargin: {
    marginHorizontal: 5
  },

  view1: {
    flex: 1,
    flexDirection: 'row',
    marginBottom:30
    
  },
  view2: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginBottom:30
  },
  view3: {
    justifyContent:'flex-start',
    flexDirection: 'row',
    flex: 4,
  },

  view4:{
    marginTop:20,
    flex:10,
    marginBottom:30

  },
  view5:{
    flex:10

  }

})