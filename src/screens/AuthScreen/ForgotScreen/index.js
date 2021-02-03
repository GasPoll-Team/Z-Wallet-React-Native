/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';
import axios from 'axios';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units'
//redux ngeod
import {connect} from 'react-redux'
import {setEmailForgot} from '../../../utils/redux/action/authAction'
import { API_URL } from '@env'

const ForgotScreen = ({navigation, setEmailForgot}) => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [Msg, setSuccesMsg] = useState('');

  const HandleSubmit = () =>{
    if(email != ''){
      const emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if(emailFormat.test(email)){
        const dataEmail = {
          email:email
        }
        axios.post(API_URL+`/auth/forgot`, dataEmail)
        .then(({data}) =>{
          setSuccesMsg(data.message)
          setEmailForgot(email)
          navigation.navigate('Otp')

        }).catch(({response}) =>{
          setErrMsg(response.data.message)
        })
      }else{
        setErrMsg('Format email salah!')
      }
    }else{
      setErrMsg('Email tidak boleh kosong!')
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.header}>Reset Password</Text>
          <Text style={styles.subHeader}>
            Enter your Zwallet e-mail so we can send
          </Text>
          <Text style={styles.subHeader}>you a password reset link</Text>
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Enter your e-mail"
            leftIcon={
              <Icon
                name="email-outline"
                size={24}
                color={email === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Text style={{color:'red'}}>{errMsg}</Text>
        <Text style={{color:'green'}}>{Msg}</Text>
        <View style={{marginTop: vh(13) }}>
          <TouchableOpacity style={styles.btnActive} onPress={HandleSubmit}>
            <Text style={styles.textActive}>Confrim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  content: {
    paddingBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0.5,
    borderColor: '#EEEEEE',
    elevation: 1,
    marginTop: 125,
  },
  subContent: {
    marginTop: 30,
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
    marginTop: 10,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    setEmailForgot: (email) =>
      dispatch(setEmailForgot(email)),
  };
};
export default connect(null, mapDispatchToProps)(ForgotScreen);