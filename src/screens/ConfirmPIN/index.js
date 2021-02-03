import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  ToastAndroid
} from 'react-native';
import OTPField from 'react-native-otp-field';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import 'axios'
import { API_URL } from '@env'


const NewPIN = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const token = useSelector((state) => state.authReducer.token);
  const tranferData = useSelector((state) => state.tranferReducer);

  const handleSubmit = () => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
        'x-access-PIN':pin
      },
    };
    console.log(tranferData)
    axios.post(API_URL+`/tranfer/newTranfer`,tranferData,config)
    .then(({data}) =>{
        alert('sukses tranfer')
    }).catch(({response}) =>{
        console.log(response.data)
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
    })

  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6379F4"
          translucent={true}
        />
        <View style={styles.header2}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginTop: 20 }}>
              <Icon name="arrow-left" color="white" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 20,
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                lineHeight: 30,
              }}>
              Confirm PIN
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.subContent}>
            {/* <Text style={styles.header}>Create Security PIN</Text> */}
            <Text style={styles.subHeader}>
              Type your new 6 digits security PIN tranfer amount
            </Text>
            <Text style={styles.subHeader}>Zwallet</Text>
          </View>
          <View style={styles.form}>
            <OTPField length={6} value={pin} onChange={(pin) => setPin(pin)} />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 25 }}>
        <TouchableOpacity
          style={pin.length === 6 ? styles.btnActive : styles.btn}
          onPress={pin.length === 6 ? handleSubmit : null}
        >
          <Text style={pin.length === 6 ? styles.textActive : styles.textNon}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    // marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 26,
    fontWeight: 'bold',
  },
  header2: {
    width: '100%',
    height: 110,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingBottom: 30,
    padding: 15,
    // backgroundColor: 'white',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderTopWidth: 0.5,
    // borderColor: '#EEEEEE',
    // elevation: 1,
    marginTop: 50,
  },
  subContent: {
    // marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 16,
    color: '#878787',
  },
  form: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  btn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  textNon: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default NewPIN;
