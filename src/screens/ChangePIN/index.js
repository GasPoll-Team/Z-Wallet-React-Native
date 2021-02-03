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


const ChangePIN = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const token = useSelector((state) => state.authReducer.token);

  const handleSubmit = () => {
    if (pin.length != 6) {
      ToastAndroid.show('Panjang PIN harus sama dengan 6', ToastAndroid.SHORT);
    } else {
      const config = {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      };
      axios.get(API_URL + `/auth/checkPIN/${pin}`, config)
        .then(({ data }) => {
          navigation.replace('NewPIN')
        }).catch(({ response }) => {
          if (response.status == 404) {
            ToastAndroid.show('PIN tidak dikenali', ToastAndroid.SHORT);
          }
          console.log(response.data)
        })
    }
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
            <TouchableOpacity style={{ marginTop: 20 }}
            onPress={()=>{navigation.goBack()}}
            >
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
              Change PIN
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.subContent}>
            {/* <Text style={styles.header}>Create Security PIN</Text> */}
            <Text style={styles.subHeader}>
              Enter your current 6 digits Zwallet PIN below to
            </Text>
            <Text style={styles.subHeader}>continue to the next steps</Text>
          </View>
          <View style={styles.form}>
            <OTPField length={6} value={pin} onChange={(pin) => setPin(pin)} />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 25 }}>
        <TouchableOpacity
          style={pin.length === 6 ? styles.btnActive : styles.btn}
          onPress={pin.length === 6 ? handleSubmit:null}
        >
          <Text style={pin.length === 6 ? styles.textActive : styles.textNon}>
            Continue
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

export default ChangePIN;
