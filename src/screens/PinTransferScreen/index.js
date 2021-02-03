/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import OTPField from 'react-native-otp-field';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PinTransferScreen = ({navigation: {navigate}}) => {
  const [pin, setPin] = useState('');
  const filled = () => {
    if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', top: 50}}>
          <Button
            icon={<Icon name="arrow-left" size={30} color="#ffffff" />}
            style={{marginTop: 20}}
            buttonStyle={styles.btnBack}
            onPress={() => navigate('Topup')}
          />
          <Text
            style={{
              marginLeft: 10,
              marginTop: 8,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 30,
            }}>
            Enter Your PIN
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.headerContent}>Enter PIN to Transfer</Text>
        <Text style={styles.subHeaderContent}>
          Enter Your 6 digits PIN for confirmation to continue transfering
          money.
        </Text>
      </View>
      <View style={styles.formOtp}>
        <OTPField
          textFieldStyle={!filled() ? styles.pinBlank : styles.pinFilled}
          length={6}
          value={pin}
          onChange={(pin) => setPin(pin)}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container2}>
        <TouchableOpacity
          disabled={!filled() ? true : false}
          style={!filled() ? styles.btnTransfer : styles.btnTfActive}
          onPress={() => filled() && navigate('Home')}>
          <Text
            style={
              !filled()
                ? {color: '#88888F', fontSize: 18, marginTop: 10}
                : {color: '#FFFFFF', fontSize: 18, marginTop: 10}
            }>
            Transfer Now
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PinTransferScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.2,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnBack: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  btn: {
    marginTop: 25,
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
  },
  cardVa: {
    flexDirection: 'row',
    marginTop: 50,
    width: windowWidth - 40,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  cardHow: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 50,
    elevation: 3,
    borderRadius: 10,
  },
  profileImg: {
    width: 56,
    height: 56,
    top: 20,
    marginLeft: 20,
  },
  textInputTf: {
    width: windowWidth - 100,
    marginLeft: 50,
    fontSize: 32,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: '700',
    color: '#6379F4',
  },
  noteInput: {
    flexDirection: 'row',
    height: 50,
    width: windowWidth,
    alignSelf: 'center',
    marginTop: 60,
    marginLeft: 50,
  },
  btnTransfer: {
    backgroundColor: '#DADADA',
    borderRadius: 10,
    width: windowWidth - 40,
    height: 50,
    // eslint-disable-next-line no-dupe-keys
    borderRadius: 10,
    marginTop: 300,
    alignItems: 'center',
    marginLeft: 20,
  },
  headerContent: {
    color: '#4D4B57',
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 22,
    fontWeight: '700',
  },
  subHeaderContent: {
    width: windowWidth - 80,
    color: '#4D4B57',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  formOtp: {
    width: '80%',
    alignContent: 'center',
    marginLeft: 35,
    marginTop: 50,
  },
  pinFilled: {
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  pinBlank: {
    borderColor: '#958E8E',
    borderWidth: 1,
  },
  btnTfActive: {
    backgroundColor: '#6379F4',
    borderRadius: 10,
    width: windowWidth - 40,
    height: 50,
    // eslint-disable-next-line no-dupe-keys
    borderRadius: 10,
    marginTop: 300,
    alignItems: 'center',
    marginLeft: 20,
  },
  container2: {
    flex: 1,
    marginBottom: 20,
  },
});
