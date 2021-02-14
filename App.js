import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome, AntDesign} from '@expo/vector-icons';
import { Food } from './components';

export default function App() {

  const image ={uri:'https://previews.123rf.com/images/romastudio/romastudio1603/romastudio160300280/54088843-healthy-food-background-studio-photo-of-different-fruits-on-white-wooden-table-high-resolution-produ.jpg'};
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <ImageBackground source={image} style={styles.image}>
        <View style={{padding:20}}>
      
        <View style={styles.iconbar}>
          <Ionicons name="cellular" size={24} color="white" />
          <FontAwesome style={styles.iconmargin} name="wifi" size={24} color="white" />
          <FontAwesome name="battery-4" size={24} color="white" />
        </View>
        <View style={styles.view1}>
          <Ionicons name="arrow-back" size={30} color="black" />
          <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
            Nepali
        </Text>
          <Text style={{ fontSize: 30, marginBottom: 20 }}>
            Food
        </Text>
        </View>
        </View>
        </ImageBackground>

      <View style={styles.view2}>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginBottom:20, marginTop:-10}}>
        <AntDesign name="menu-unfold" size={24} color="red" />
        </View>
      
       
        <Food price="$100" fname="Chinese Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food price="$200" fname="Nepali Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food price="$100" fname="Chinese Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food price="$200" fname="Nepali Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
        <Food price="$200" fname="Nepali Cuisine" desc="Contrary to popular belief, 
        Lorem Ipsum is not simply random text. ">https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591</Food>
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
  view2: {
    flex: 8,
    borderRadius:30,
    marginTop:-22,
    backgroundColor:"#fff",
    paddingHorizontal:20,
    paddingVertical:40

  },
  iconbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  view1: {
    flex: 2.5
  },
  iconmargin: {
    marginHorizontal: 5
  },
  top: {
    flex: 2.5,
  },
  image: {
    width:'100%',
    height:250

  }

})
