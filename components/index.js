import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Product from '../DATA.json';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, Modal, Touchable, TouchableHighlight } from 'react-native';
import { Entypo } from '@expo/vector-icons'

const TopBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.header}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.fitermodal} >

          <View s>
            <Entypo style={styles.close} onPress={() => setModalOpen(false)} name="cross" color={'#947D29'} size={28} />
            <Text>Filter Modal </Text>
          </View>

        </View>
      </Modal>

      <Text style={styles.title}>SmartBuy</Text>
      <Ionicons name="filter-outline" size={40} color="white" onPress={() => setModalOpen(true)} />
    </View>
  )
}

const Item = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.fitermodal} >

          <View style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 10
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Detailed  Specifications </Text>
              <Entypo style={styles.close} onPress={() => setModalOpen(false)} name="cross" color={'#947D29'} size={28} />
            </View>
            <View>

            </View>

          </View>


        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          Product.map(item => {
            return (
              <View key={item.Id} style={styles.item}>
                <TouchableHighlight onPress={() => setModalOpen(true)}>
                  <ImageBackground resizeMode='contain' style={styles.image} borderRadius={5}
                    source={{ uri: item.image }}>
                    <View style={styles.categoryoverlay}>
                      <Text style={{
                        color: "#fff", padding: 10,
                        fontWeight: 'bold',
                        backgroundColor: "#947D29", borderRadius: 10, opacity: 0.7
                      }}>{item.category}</Text>
                    </View>

                    <View style={styles.overlayContainer}>
                      <Text style={styles.name}>{item.title}</Text>
                    </View>

                    <View style={styles.priceoverlay}>
                      <Text style={{
                        color: "#fff",
                        padding: 10,
                        backgroundColor: "#947D29", opacity: 0.7, borderRadius: 10
                      }}>{item.price}</Text>
                    </View>

                  </ImageBackground>
                </TouchableHighlight>

              </View>


            )
          })
        }
      </ScrollView>


    </View>
  )



}

const styles = StyleSheet.create({
  header: {
    flex: 0.10,
    backgroundColor: '#7278E0',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white'
  },
  item: {
    marginVertical: 10

  },
  image: {
    height: 300,
    width: "100%",
    backgroundColor: "#C1C4FE",
    borderRadius: 10

  },

  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  priceoverlay: {
    alignItems: 'flex-end'

  },
  categoryoverlay: {
    alignItems: 'flex-start'
  },
  close: {
    alignItems: 'flex-end',
    justifyContent: 'center'

  },

  fitermodal: {
    flex: 1,
    backgroundColor: '#DEDACA',
    padding: 30

  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 'bold'
  }

})

export { TopBar, Item }