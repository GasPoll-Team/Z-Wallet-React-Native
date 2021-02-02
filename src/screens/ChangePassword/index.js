import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';

const ChangePassword = ({navigation}) => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [pass3, setPass3] = useState('');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header2}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginTop: 20}}>
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
      </ScrollView>
      <View style={{marginBottom: 50}}>
        <TouchableOpacity style={styles.btnActive}>
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
