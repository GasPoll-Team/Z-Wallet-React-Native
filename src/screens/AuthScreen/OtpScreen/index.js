<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

// import {API_URL} from '@env';

const OtpScreen = ({navigation}) => {
  const API_URL = 'http://192.168.100.179:8000';
  const [otp, setOtp] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const email = useSelector((state) => state.authReducer.email);

  const empty = () => {
    if (otp === '') {
      return true;
    } else {
      return false;
    }
  };
  const activate = () => {
    if (!empty()) {
      if (otp === '') {
        setErrMsg('fill otp');
      } else {
        const dataOTP = {
          email: email,
          otp: otp,
        };
        axios
          .post(API_URL + '/auth/findOTP', dataOTP)
          .then((res) => {
            console.log('email aktive', res);
            navigation.navigate('Reset');
          })
          .catch((err) => {
            console.log(err.response.data);
            // console.log('error disokin', err);
          });
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.header}>OTP</Text>
          <Text style={styles.subHeader}>Fill the OTP</Text>
          <Text style={styles.subHeader}>to reset your password</Text>
        </View>
        {/* <Text>ini email : {email}</Text> */}
        <View style={styles.form}>
          <Input
            placeholder="Enter your OTP"
            leftIcon={
              <IconUser
                name="user"
                size={24}
                color={otp === '' ? '#878787' : '#6379F4'}
              />
            }
            onChangeText={(otp) => setOtp(otp)}
          />
        </View>

        <TouchableOpacity
          style={empty() ? styles.btn : styles.btnActive}
          onPress={() => {
            if (!empty()) {
              activate();
            }
          }}>
          <Text style={empty() ? styles.textNon : styles.textActive}>
            Submit
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
    marginTop: 150,
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
    marginTop: 135,
    // height: '100%',
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
  forgot: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    top: -8,
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

export default OtpScreen;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux'

// import {API_URL} from '@env';

const ActiveScreen = ({ navigation }) => {
    const API_URL = 'https://12a223fb9884.ngrok.io'
    const [otp, setOtp] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const email = useSelector((state) => state.authReducer.email);

    const empty = () => {
        if (otp === '') {
            return true;
        } else {
            return false;
        }
    };
    const activate = () => {
        if (!empty()) {
            if (otp === '') {
                setErrMsg('fill otp');
            } else {
                const dataOTP = {
                    email:email,
                    otp:otp
                }
                axios
                    .post(API_URL + `/auth/findOTP`, dataOTP)
                    .then((res) => {
                        console.log('email aktive', res);
                        navigation.navigate('Reset');
                    })
                    .catch((err) => {
                        console.log(err.response.data)
                        // console.log('error disokin', err);
                    });
            }
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.name}>Zwallet</Text>
            <View style={styles.content}>
                <View style={styles.subContent}>
                    <Text style={styles.header}>OTP</Text>
                    <Text style={styles.subHeader}>
                        Fill the OTP
          </Text>
                    <Text style={styles.subHeader}>to reset your password</Text>
                </View>
                {/* <Text>ini email : {email}</Text> */}
                <View style={styles.form}>
                    <Input
                        placeholder="Enter your OTP"
                        leftIcon={
                            <IconUser
                                name="user"
                                size={24}
                                color={otp === '' ? '#878787' : '#6379F4'}
                            />
                        }
                        onChangeText={(otp) => setOtp(otp)}
                    />
                </View>

                <TouchableOpacity
                    style={empty() ? styles.btn : styles.btnActive}
                    onPress={() => {
                        if (!empty()) {
                            activate();
                        }
                    }}>
                    <Text style={empty() ? styles.textNon : styles.textActive}>
                        Submit
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
        marginTop: 150,
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
        marginTop: 135,
        // height: '100%',
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
    forgot: {
        alignSelf: 'flex-end',
        paddingRight: 15,
        top: -8,
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

export default ActiveScreen;
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
