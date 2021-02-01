import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPassScreen = ({navigation}) => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const empty = () => {
    if (email === '' || pass === '') {
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
        <View style={{marginTop: 60}}>
          <TouchableOpacity
            style={styles.btnActive}
            onPress={() => {
              navigation.navigate('Pin');
            }}>
            <Text style={styles.textActive}>Login</Text>
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
