import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';


const HomeStack = createStackNavigator();

const MainNavigator = ()=>{
    return(
        <NavigationContainer>
            <HomeStack.Navigator>
            <HomeStack.Screen name="Categories" component={CategoriesScreen}/>
            </HomeStack.Navigator>
        </NavigationContainer>

    )

}
export default MainNavigator;