/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux'

const data = [
  {
    number: 1,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 2,
    value: `Type your security number on the ATM or E-Banking.`,
  },
  {
    number: 3,
    value: 'Select “Transfer” in the menu',
  },
  {
    number: 4,
    value: 'Type the virtual account number that we provide you at the top.',
  },
  {
    number: 5,
    value: 'Type the amount of the money you want to top up.',
  },
  {
    number: 6,
    value: 'Read the summary details',
  },
  {
    number: 7,
    value: 'Press transfer / top up',
  },
  {
    number: 8,
    value: 'You can see your money in Zwallet within 5 minutes.',
  },
];

const TopupScreen = ({navigation: {navigate}}) => {
  const myPhone = useSelector((state) => state.myDataReducer.phone);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={styles.cardVa}>
          <Button
            icon={<Icon name="plus" size={35} color="#6379F4" />}
            buttonStyle={styles.btn}
          />
          <Text
            style={{
              marginTop: 30,
              marginLeft: 10,
              color: '#7A7886',
              fontSize: 14,
            }}>
            Virtual Account Number
          </Text>
          <Text
            style={{
              marginTop: 55,
              marginLeft: '-43%',
              fontWeight: '700',
              fontSize: 16,
            }}>
            2389-{myPhone.toString().replace('+62','0')}
          </Text>
        </View>
      </View>
      <ScrollView style={{marginBottom:20}}>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          How to Top-Up
        </Text>
        {data.map((x, i) => {
          return (
            <View key={i}>
              <View style={styles.cardHow}>
                <Text
                  style={{
                    padding: 30,
                    color: '#6379F4',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {x.number+'. '}
                </Text>
                <Text
                  style={{
                    marginLeft:5,
                    width: windowWidth * 0.67,
                    marginTop: 35,
                    position: 'absolute',
                    left: 50,
                    fontSize: 16,
                    fontWeight:'bold'
                  }}>
                  {x.value}
                </Text>
              </View>
            </View>
          );
        })}
        <View style={{marginBottom:20}}></View>
      </ScrollView>
    </View>
  );
};

export default TopupScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.23,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnBack: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  btn: {
    marginTop: 25,
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
  },
  cardVa: {
    flexDirection: 'row',
    marginTop: 10,
    width: windowWidth - 40,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  cardHow: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 50,
    elevation: 3,
    borderRadius: 10,
  },
});
