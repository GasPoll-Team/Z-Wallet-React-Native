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
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 3,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 4,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 5,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 6,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 7,
    value: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    number: 8,
    value: 'Go to the nearest ATM or you can use E-Banking.',
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
        {/* <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginTop: 20}}>
            <Icon name="g-translate" color="white" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 8,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 30,
            }}>
            Top Up
          </Text>
        </View> */}
        <View style={styles.cardVa}>
          <Button
            icon={<Icon name="plus" size={35} color="#6379F4" />}
            buttonStyle={styles.btn}
            onPress={() => navigate('Transfer')}
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
      <ScrollView>
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
                  {x.number}
                </Text>
                <Text
                  style={{
                    marginTop: 35,
                    position: 'absolute',
                    left: 50,
                    fontSize: 12,
                  }}>
                  {x.value}
                </Text>
              </View>
            </View>
          );
        })}
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
    height: windowHeight * 0.4,
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
    marginTop: 50,
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
