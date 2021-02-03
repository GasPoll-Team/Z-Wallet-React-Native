import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { API_URL } from '@env'
import { set } from 'react-native-reanimated';

const ChangePassword = ({ navigation }) => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [pass3, setPass3] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [errMsg, setErrMsg] = useState('')

  const token = useSelector((state) => state.authReducer.token);

  const empty = () => {
    if (pass === '' || pass2 === '' || pass3 === '') {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = () => {
    if (!empty()) {
      if (pass2 != pass3) {
        setErrMsg('Konfirmasi password harus sama !')
      } else {
        const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
        if (checkPass.test(pass2)) {
          setErrMsg('')
          const config = {
            headers: {
              'x-access-token': 'bearer ' + token,
            },
          };
          const updatePassword = {
            old_password: pass,
            new_password: pass2
          }
          axios.patch(API_URL + `/user/changePassword`, updatePassword, config)
            .then(({ data }) => {
              ToastAndroid.show(data.message, ToastAndroid.SHORT);
              navigation.replace('Profile')
            }).catch(({ response }) => {
              if (response.status == 401) {
                ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
                setPass('')
              }
              console.log(response.data)
            })
        } else {
          setErrMsg('Password must contain at least 1 number, and be longer than 8 character')
        }
      }
    } else {
      setErrMsg('Password tidak boleh kosong!')
    }
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6379F4"
          translucent={true}
        />
        <View style={styles.header2}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginTop: 20 }}
            onPress={()=>{navigation.goBack()}}>
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
              Change Password
          </Text>
          </View>
        </View>

        <View style={styles.descript}>
          <Text style={styles.header}>
            You must enter your current password and then type your new password
            twice
          </Text>
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Old password"
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
            value={pass}
            onChangeText={(text) => {
              setPass(text);
            }}
            secureTextEntry={show}
          />
          <Input
            placeholder="New password"
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
          <Input
            placeholder="Confrim New password"
            leftIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={pass3 === '' ? '#878787' : '#6379F4'}
              />
            }
            rightIcon={
              <Icon
                name={!show3 ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#878787"
                onPress={() => {
                  setShow3(!show3);
                }}
              />
            }
            onChangeText={(text) => {
              setPass3(text);
            }}
            secureTextEntry={show3}
          />
        </View>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>{errMsg}</Text>
      </ScrollView>
      <View style={{ marginBottom: 50 }}>
        <TouchableOpacity style={styles.btnActive}
        onPress={handleSubmit}
        >
          <Text style={styles.textActive}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'white',
  },
  header2: {
    width: '100%',
    height: 110,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  descript: {
    marginTop: 83,
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    color: '#7A7886',
    textAlign: 'center',
    lineHeight: 27,
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
  //   bottom: {
  //     width: '100%',
  //     height: 220,
  //     // backgroundColor: '#ffffff',
  //     bottom: 0,
  //     borderRadius: 30,
  //     paddingHorizontal: 15,
  //   },
});

export default ChangePassword;
