import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Expenses, Transactions } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.top}>
        <View style={styles.topIcon}>
          <Ionicons name="chevron-back" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>

        <View style={styles.balance}>
          <Text style={{ color: "#C0C0C0" }}>Your Balance</Text>
          <Text style={{ color: "#fff", fontSize: 20 }}>$547,000.00</Text>
        </View>

        <View style={styles.expenses}>
          <Expenses bcolor="#c4f2ff" iconcolor="#2f36d9" amount="$5,0000" reason="Expense" >
            comments-dollar
         </Expenses>
          <Expenses bcolor="#ffe6d7" iconcolor="orange" amount="$15,000" reason="Spend to Goals">
            funnel-dollar
         </Expenses>
        </View>

      </View>

      <View style={styles.bottom}>

        <View style={styles.btop}>
          <Text style={{ fontSize: 20 }}>Transactions</Text>
          <View style={{ backgroundColor: "#C0C0C0", borderRadius: 16, paddingHorizontal:20, paddingVertical:10, height:40 }}><Text style={{ color: "blue", textAlign:"center"}}>See All</Text></View>
        </View>

        <View style={styles.tranx}>
          <Transactions spent="Car Purchase" type="Auto loan" dollar="-$250" tcolor="#18BA81">car</Transactions>
          <Transactions spent="Home Purchase" type="Auto loan" dollar="-$2250" tcolor="#3C46B0">house-user</Transactions>
          <Transactions spent="Transport" type="Auto loan" dollar="-$250" tcolor="#FF5758">uber</Transactions>
          <Transactions spent="Shopping" type="Auto loan" dollar="-$350" tcolor="#12BABB">shopping-bag</Transactions>


        </View>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2f36d9',
    borderRadius: 35

  },
  top: {
    flex: 1,
    padding: 40,
    backgroundColor: '#2f36d9',
   
    flexDirection: 'column'
  },

  bottom: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 35

  },
  topIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  balance: {
    flex: 1,
    padding: 5,
    marginTop: 20,
  },
  expenses: {
    flex: 3,
    padding: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 10,
  },
  btop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tranx: {

    flex: 6,
  }


})