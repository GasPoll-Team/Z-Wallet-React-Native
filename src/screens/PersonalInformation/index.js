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
import {useSelector} from 'react-redux'
import axios from 'axios'
import { API_URL } from '@env'

const PersonalInformation = ({navigation}) => {
  const token = useSelector((state) => state.authReducer.token);
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios.get(API_URL + `/user/myProfile`, config)
      .then(({ data }) => {
        // console.log('ini halaman personal info')
        setUserData(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
      })
  },[])
  return (
   <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginTop: 20}}
          onPress={()=>{navigation.goBack()}}
          >
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
            Personal Information
          </Text>
        </View>
      </View>
       <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <View style={styles.list}>
          <Text style={styles.listTitle}>First Name</Text>
          <Text style={styles.subTitle}>{userData !== undefined? userData.firstname : ''}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle}>Last Name</Text>
          <Text style={styles.subTitle}>{userData !== undefined? userData.lastname : ''}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle}>Verifed E-mail</Text>
          <Text style={styles.subTitle}>{userData !== undefined? userData.email : ''}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle} onPress={() => {
            navigation.navigate('AddNumber')
          }}>Phone Number</Text>
          <Text style={styles.subTitle}>{userData !== undefined? userData.phone : ''}</Text>
          <Text style={styles.manage} onPress={() => {
            navigation.navigate('SuccessTrans')
          }}>manage</Text>
        </View>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 110,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40,
    color: '#7A7886',
    fontSize: 16,
  },
  list: {
    backgroundColor: 'white',
    padding: 10,
    height: 75,
    justifyContent: 'space-around',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  listTitle: {
    color: '#7A7886',
    fontSize: 16,
  },
  subTitle: {
    color: '#514F5B',
    fontSize: 22,
    fontWeight: 'bold',
  },
  manage: {
    position: 'absolute',
    right: 10,
    top: '50%',
    color: '#6379F4',
    fontSize: 16,
  },
});

export default PersonalInformation;
