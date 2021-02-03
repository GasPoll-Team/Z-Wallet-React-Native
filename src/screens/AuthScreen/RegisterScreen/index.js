/* eslint-disable eol-last */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Input} from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
// import {API_URL} from '@env';
import {API_URL} from '@env';

const RegisterScreen = ({navigation}) => {
  // const API_URL = 'http://192.168.100.179:8000';
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [show, setShow] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const empty = () => {
    if (user === '' || email === '' || pass === '') {
      return true;
    } else {
      return false;
    }
  };

  const register = () => {
    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;

    if (!empty()) {
      if (!email.match(emailFormat)) {
        setErrMsg('Invalid Format email');
      } else if (!checkPass.test(pass)) {
        setErrMsg(
          'Password must contain at least 1 number, and be longer than 8 character',
        );
      } else {
        const data = {
          username: user,
          email: email,
          password: pass,
        };
        axios
          .post(API_URL + '/auth/signup', data)
          .then((res) => {
            console.log('Regis Done', res);
            navigation.navigate('Active');
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log('error disokin', err);
          });
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.header}>Sign Up</Text>
          <Text style={styles.subHeader}>
            Create your account to access Zwallet
          </Text>
        </View>
        <View style={styles.form}>
          <Text
            style={{
              marginBottom: 10,
              color: 'red',
              paddingRight: 10,
              fontSize: 15,
              textAlign: 'center',
            }}>
            {errMsg}
          </Text>

          {/* username */}
          <Input
            placeholder="Enter your username"
            leftIcon={
              <IconUser
                name="user"
                size={24}
                color={user === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(user) => setUser(user)}
          />
          {/* username */}

          {/* email */}
          <Input
            placeholder="Enter your e-mail"
            leftIcon={
              <Icon
                name="email-outline"
                size={24}
                color={email === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(email) => setEmail(email)}
          />
          {/* email */}

          {/* password */}
          <Input
            placeholder="Enter your password"
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
            onChangeText={(pass) => {
              setPass(pass);
            }}
            secureTextEntry={show}
          />
          {/* password */}
        </View>
        <TouchableOpacity
          style={empty() ? styles.btn : styles.btnActive}
          onPress={register}>
          <Text style={empty() ? styles.textNon : styles.textActive}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.acc}>
            Already have an account? Let's
            <Text style={styles.login}> Login</Text>
          </Text>
        </TouchableOpacity>
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
    marginTop: 90,
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
  acc: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#5D5757',
  },
  login: {
    color: '#6379F4',
    fontWeight: 'bold',
  },
});

// eslint-disable-next-line prettier/prettier
export default RegisterScreen;