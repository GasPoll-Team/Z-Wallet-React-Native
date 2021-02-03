/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {setTranfer} from './../../utils/redux/action/tranferAction'
import pensil from '../../assets/images/pensil.png';
import { useSelector, connect } from 'react-redux'
import { API_URL } from '@env'

const TransferScreen = ({navigation, setTranfer}) => {
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')
  const recipient = useSelector((state) => state.contactReducer)
  const myData = useSelector((state) => state.myDataReducer)
  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleTranfer = () => {
    const dataTranfer = {
      receiver: recipient.id,
      amount: amount,
      notes: notes
    }
    setTranfer(dataTranfer)
    navigation.replace('Confirm')
  }


  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={styles.cardVa}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: API_URL + recipient.image }} style={styles.profileImg} />
            <View>
              <Text
                style={{
                  marginTop: 25,
                  marginLeft: 20,
                  color: '#7A7886',
                  fontSize: 14,
                }}>
                {recipient.name}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 20,
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                {recipient.phone}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text
            style={{
              fontSize: 32,
              marginTop: 25,
              fontWeight: '700'
            }}
          >Rp.</Text>
          <TextInput
            value={amount}
            placeholder="0"
            keyboardType={'phone-pad'}
            placeholderTextColor="#B5BDCC"
            style={styles.textInputTf}
            onChangeText={(duit) => { setAmount(duit) }}
          />
        </View>
        <Text style={{ color: '#7C7895', alignSelf: 'center', marginTop: 20 }}>
          Rp. {toPrice(myData.balance)} Available
        </Text>
      </View>
      <View style={styles.noteInput}>
        <Image source={pensil} style={{ width: 19, height: 19, top: 10 }} />
        <TextInput style={{ marginLeft: 17 }} value={notes} placeholder="Add some notes" onChangeText={(text) => { setNotes(text) }} />
      </View>
      <View style={{ height: 1, width: windowWidth * 0.95, backgroundColor: '#A9A9A9', marginHorizontal: 10 }} />
      <TouchableOpacity style={styles.btnTransfer}
        onPress={myData.balance > amount ? handleTranfer : null}
      >
        <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>
          Transfer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTranfer: (data) =>
      dispatch(setTranfer(data)),
  };
};
export default connect(null, mapDispatchToProps)(TransferScreen);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
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
    width: '40%',
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
    marginTop: windowHeight * 0.15,
    alignItems: 'center',
    marginLeft: 40,
  },
});
