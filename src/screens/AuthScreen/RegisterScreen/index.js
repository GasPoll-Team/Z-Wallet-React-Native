import React, {useEffect, useState} from 'react';
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

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [show, setShow] = useState(true);

  const empty = () => {
    if (user === '' || email === '' || pass === '') {
      return true;
    } else {
      return false;
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
            onChangeText={(text) => setUser(text)}
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
            onChangeText={(text) => setEmail(text)}
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
            onChangeText={(text) => {
              setPass(text);
            }}
            secureTextEntry={show}
          />
          {/* password */}
        </View>
        <TouchableOpacity style={empty() ? styles.btn : styles.btnActive} onPress={() => {
          navigation.navigate('Active')
        }}>
          <Text style={empty() ? styles.textNon : styles.textActive}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Login')
        }}>
          <Text style={styles.acc}>
            Already have an account? Let's
            <Text style={styles.login}>Login</Text>
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

export default RegisterScreen;
