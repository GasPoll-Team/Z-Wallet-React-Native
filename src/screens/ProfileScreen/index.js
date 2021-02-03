import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert
} from 'react-native';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units'
import { useSelector, connect } from 'react-redux'
import axios from 'axios'
// import { API_URL } from '@env'
import { logout } from '../../utils/redux/action/authAction'
import ImagePicker from 'react-native-image-crop-picker'

import Icon from 'react-native-vector-icons/Feather';
import profile from '../../assets/images/profile-img.png';


const ProfileScreen = ({ navigation, logout }) => {
  const API_URL = 'http://192.168.1.2:8000';
  const token = useSelector((state) => state.authReducer.token);
  const id = useSelector((state) => state.authReducer.token)
  const [isEnabled, setIsEnabled] = useState(false);
  const [userData, setUserData] = useState({})
  const [photo, setPhoto] = useState([])

  const config = {
    headers: {
      'x-access-token': 'bearer ' + token,
    },
  };

  useEffect(() => {
    axios.get(API_URL + `/user/myProfile`, config)
      .then(({ data }) => {
        setUserData(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }, [])

  const changePhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images.length);
        setPhoto(images)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const uploadPicture = () => {
    const pictureData = new FormData()
    for (let i = 0; i < photo.length; i++) {
      pictureData.append('image',
        {
          name: photo[i].path.split('/').pop(),
          type: photo[i].mime,
          uri:
            Platform.OS === 'android'
              ? photo[i].path
              : photo[i].path.replace('file://', ''),
        }
      );
    }
    axios.patch(API_URL + `/user/changePhoto`, pictureData, config)
      .then(({ data }) => {
        navigation.replace('Home')
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }

  const promptLogout = () => {
    Alert.alert(
      "Logout?",
      "You'll be logout from system",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: Logout }
      ],
      { cancelable: true }
    );
  }

  const Logout = () => {
    axios.delete(API_URL + `/auth/logout/${token}`, config)
      .then(({ data }) => {
        logout(token)
      }).catch(({ response }) => {
        console.log(response.data)
      })

  }

  const toggleSwitch = () => setIsEnabled((f) => !f);
  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {
        userData !== undefined ? (
          <>
            <View style={styles.content}>
              {
                photo.length < 1 ?

                  <Image source={{ uri: API_URL + userData.image }} style={styles.imguser} />
                  :
                  <Image source={{ uri: photo[0].path }} style={styles.imguser} />
              }
              {
                photo.length < 1 ? (
                  <>
                    <TouchableOpacity style={styles.edit}
                      onPress={changePhoto}
                    >
                      <Icon name="edit-2" color="#7A7886" />
                      <Text style={styles.txtedit}>Edit</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                    <>
                      <TouchableOpacity style={styles.edit}
                        onPress={uploadPicture}
                      >
                        <Icon name="edit-2" color="#7A7886" />
                        <Text style={styles.txtedit}>Upload</Text>
                      </TouchableOpacity>
                    </>
                  )
              }
              <Text style={styles.name}>{userData.firstname} {userData.lastname}</Text>
              <Text style={styles.phone}>{userData.phone}</Text>
            </View>
          </>
        ) : (
            <>
              <View style={styles.content}>
                <Image source={profile} style={styles.imguser} />
                <TouchableOpacity style={styles.edit}>
                  <Icon name="edit-2" color="#7A7886" />
                  <Text style={styles.txtedit}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles.name}>...</Text>
                <Text style={styles.phone}>+62......</Text>
              </View>
            </>
          )
      }
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => navigation.navigate('Personal')}>
          <Text style={styles.nameOperation}>Personal Information</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => {
            navigation.navigate('Change');
          }}>
          <Text style={styles.nameOperation}>Change Password</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => {
            navigation.navigate('ChangePIN');
          }}>
          <Text style={styles.nameOperation}>Change PIN</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <View style={styles.listOperation}>
          <Text style={styles.nameOperation}>Notification</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
        </View>

        <TouchableOpacity
          style={styles.listOperation}
          onPress={promptLogout}
        >
          <Text style={styles.nameOperation}>Logout</Text>
          {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: vh(2),
    height: '100%',
    backgroundColor: 'white',
    // marginTop: 90,
  },
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh(8),
  },
  imguser: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  edit: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtedit: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7A7886',
  },
  name: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 30,
  },
  listOperation: {
    backgroundColor: '#E5E8ED',
    padding: 27,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameOperation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (token, id) =>
      dispatch(logout(token, id)),
  };
};
export default connect(null, mapDispatchToProps)(ProfileScreen);

// export default ProfileScreen
