import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Touchable,
} from 'react-native';
import OTPField from 'react-native-otp-field';

const PinScreen = () => {
  const [pin, setPin] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.header}>Create Security PIN</Text>
          <Text style={styles.subHeader}>
            Create a PIN that's contain 6 digits number for
          </Text>
          <Text style={styles.subHeader}>security purpose in Zwallet</Text>
        </View>
        <View style={styles.form}>
          <OTPField
            length={6}
            value={pin.toString()}
            onChange={(text) => setPin(text)}
          />
        </View>
        <View style={{marginTop: 150}}>
        <TouchableOpacity
          style={pin.length !== 6 ? styles.btn : styles.btnActive}>
          <Text style={pin.length !== 6 ? styles.textNon : styles.textActive}>
            Confrim
          </Text>
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

export default PinScreen;
