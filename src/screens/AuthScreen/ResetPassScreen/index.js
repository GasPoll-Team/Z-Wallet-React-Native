<<<<<<< HEAD
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
<<<<<<< HEAD
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPassScreen = ({navigation}) => {
=======
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'
import axios from 'axios'

const ResetPassScreen = ({ navigation }) => {
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
<<<<<<< HEAD

  const empty = () => {
    if (email === '' || pass === '') {
      return true;
    } else {
      return false;
    }
  };

=======
  const [errMsg, setErrMsg] = useState('')

  const email = useSelector((state) => state.authReducer.email);

  const empty = () => {
    if (pass === '' || pass2 === '') {
      return true;
    } else {
      return false
    }
  };

  const handleSubmit = () => {
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    const API_URL = 'https://12a223fb9884.ngrok.io'
    if (!empty()) {
      if (pass == pass2) {
        if (checkPass.test(pass)) {
          const dataUpdate = {
            email: email,
            password: pass
          }
          axios.patch(API_URL + `/auth/reset`, dataUpdate)
            .then((res) => {
              console.log(res.data)
              navigation.navigate('Login');
            })
            .catch((err) => {
              console.log(err.response.data)
            });
        } else {
          setErrMsg(
            'Password must contain at least 1 number, and be longer than 8 character'
          )
        }
      } else {
        setErrMsg('Password tidak sama!')
      }
    } else {
      setErrMsg('Password tidak boleh kosong')
    }
  }

>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.header}>Reset Password</Text>
          <Text style={styles.subHeader}>
            Create and confrim your new password so
          </Text>
          <Text style={styles.subHeader}>you can login to Zwallet</Text>
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Create your password"
            leftIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={pass === '' ? '#878787' : '#6379F4'}
              />
            }
            rightIcon={
              <Icon
                name={!show ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#878787"
                onPress={() => {
                  setShow(!show);
                }}
              />
            }
            onChangeText={(text) => {
              setPass(text);
            }}
            secureTextEntry={show}
          />
          <Input
            placeholder="Confrim your password"
            leftIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={pass2 === '' ? '#878787' : '#6379F4'}
              />
            }
            rightIcon={
              <Icon
                name={!show2 ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#878787"
                onPress={() => {
                  setShow2(!show2);
                }}
              />
            }
            onChangeText={(text) => {
              setPass2(text);
            }}
            secureTextEntry={show2}
          />
        </View>
<<<<<<< HEAD
        <View style={{marginTop: 60}}>
          <TouchableOpacity
            style={styles.btnActive}
            onPress={() => {
              navigation.navigate('Pin');
            }}>
            <Text style={styles.textActive}>Login</Text>
          </TouchableOpacity>
        </View>
=======
        <Text style={{ color: 'red', fontWeight: 'bold' }}>{errMsg}</Text>
        <View>
          <TouchableOpacity
            style={styles.btnActive}
            onPress={handleSubmit}>
            <Text style={styles.textActive}>Reset</Text>
          </TouchableOpacity>
        </View>

>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
    padding: 10,
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
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default ResetPassScreen;
