import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Food = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginBottom: 15, flexDirection: 'row' }}>
                <Image style={{ width: 100, height: 90, borderRadius: 30, resizeMode: 'cover' }}
                    source={{ uri: props.children }}></Image>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.fname}</Text>
                    <Text style={{ color: 'gray', width: 200, textAlign: 'justify', padding: 5 }}>{props.desc}</Text>
                </View>
            </View>

            <View>
                <Ionicons name="add-circle-sharp" size={48} color="red" />
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.price}</Text>

            </View>
        </View>
    )
}
export { Food };

