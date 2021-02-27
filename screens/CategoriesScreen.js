import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CategoriesScreen = props => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Home Page</Text>
        <Button title="Go to products page" onPress={null}/>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding: 20
    },
    title:
    {
        fontSize:22
    }
})

export default CategoriesScreen;