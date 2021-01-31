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

const ForgotScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

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
        <View style={{marginTop: 150}}>
          <TouchableOpacity style={styles.btnActive} onPress={() => {
            navigation.navigate('Reset')
          }}>
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

export default ForgotScreen;
