import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, ImageBackground, ScrollView, MaskedViewComponent, FlatList} from 'react-native';
import { Ionicons, FontAwesome, AntDesign} from '@expo/vector-icons'

export default function App() {
  return (
        <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle='dark-content'/>

         <View style={styles.top}>
           <Text style={styles.title}>AirQuality</Text>
         </View>

         <View style={{alignItems:'center', paddingVertical:25, flex:1.5}}>
           <View style={{flexDirection:'row'}}>
           <FontAwesome name="location-arrow" size={40} color="#53667E" />
           <Text style={{fontSize:30,color:"#53667E", paddingHorizontal:5}}>Kathmandu</Text>
           </View>
           <Text style={{fontSize:15, color:"gray"}}>ktm, Nepal</Text>
         </View>

         <View style={styles.status}>
          <View style={{flex:4, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
           <View>
             <Text>Icon</Text>
           </View>
           <View>
             <Text>AQI</Text>
           </View>
           <View >
             <Text>Category</Text>
             <Text>pm3.5 value/m3</Text>
             </View>
          </View>
          <View style=
          {{backgroundColor:"white",flex:3, justifyContent:'space-evenly',
          flexDirection:'row', alignItems:'center',}}>
          
              <View style={{flexDirection:'row'}}>
              <Text>Icon</Text>
              <Text>Temperature</Text>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text>Icon</Text>
                <Text>Rain%</Text>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text>Icon</Text>
                <Text>distance</Text>
              </View>


              
            
          </View>
        </View>

        <View style=
        {{ marginHorizontal:20, flex:3,
         padding:10, justifyContent:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <Text>Picture</Text>
          <Text> About AQI</Text>
          </View>
          <Text>MoreIcon</Text>
        </View>
        </View>


        <View style={{flex:3, marginHorizontal:20}}>
          <Text>
            7 Days Weather forecast
          </Text>

        </View>


{/* Navigation bar */}
        <View style={{flex:1, marginHorizontal:20 }} >
          <FlatList ListFooterComponent={<Text>Navigation to home, data and predictAQI</Text>}/>

        </View>


        </View>
         );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical:5,
  },
  title:{
    color:'#4783B7',
    fontSize:32,
    fontWeight:'bold'

},
top:{
flex:1,
alignItems:'center',
borderBottomWidth:1,
borderColor:'#d3d3d3',
paddingVertical:20,
paddingHorizontal:15
},
status:{
  marginHorizontal:20,
  borderRadius:5,
  backgroundColor:"#FE7777",
  flex:5,
  justifyContent:'space-between',
  elevation:5

}
});
