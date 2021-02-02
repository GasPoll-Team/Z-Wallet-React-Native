/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import profileImg from '../../assets/profiles/1.png';
import pensil from '../../assets/images/pensil.png';

const TransferScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', top: 18}}>
          <Button
            icon={<Icon name="arrow-left" size={30} color="#ffffff" />}
            style={{marginTop: 20}}
            buttonStyle={styles.btnBack}
            onPress={() => navigate('Topup')}
          />
          <Text
            style={{
              marginLeft: 10,
              marginTop: 8,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 30,
            }}>
            Transfer
          </Text>
        </View>
        <View style={styles.cardVa}>
          <Image source={profileImg} style={styles.profileImg} />
          <Text
            style={{
              marginTop: 30,
              marginLeft: 20,
              color: '#7A7886',
              fontSize: 14,
            }}>
            Samuel
          </Text>
          <Text
            style={{
              marginTop: 55,
              marginLeft: '-14%',
              fontWeight: '700',
              fontSize: 16,
            }}>
            1234567778889890
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="0.00"
          keyboardType={'phone-pad'}
          placeholderTextColor="#B5BDCC"
          style={styles.textInputTf}
        />
        <Text style={{color: '#7C7895', alignSelf: 'center', marginTop: 20}}>
          Rp. 120.000 Available
        </Text>
      </View>
      <View style={styles.noteInput}>
        <Image source={pensil} style={{width: 19, height: 19, top: 10}} />
        <TextInput style={{marginLeft: 17}} placeholder="Add some notes" />
      </View>
      <View style={{height: 1, width: 343, backgroundColor: '#A9A9A9'}} />
      <TouchableOpacity style={styles.btnTransfer}>
        <Text style={{color: '#fff', fontSize: 18, marginTop: 10}}>
          Transfer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferScreen;

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
  profileImg: {
    width: 56,
    height: 56,
    top: 20,
    marginLeft: 20,
  },
  textInputTf: {
    width: '20%',
    alignSelf: 'center',
    fontSize: 32,
    marginTop: 15,
    fontWeight: '700',
  },
  noteInput: {
    flexDirection: 'row',
    height: 50,
    width: windowWidth,
    alignSelf: 'center',
    marginTop: 60,
    marginLeft: 50,
  },
  btnTransfer: {
    backgroundColor: '#6379F4',
    borderRadius: 10,
    width: windowWidth - 100,
    height: 50,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    marginLeft: 40,
  },
});
