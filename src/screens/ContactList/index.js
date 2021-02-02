<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
<<<<<<< HEAD
} from 'react-native';
import {SearchBar, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import profileImg from '../../assets/images/profile-img.png';

const ContactList = ({navigation: {navigate}}) => {
  const [search, setSearch] = useState('');
=======
  SafeAreaView,
  ScrollView
} from 'react-native';
import { SearchBar, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units'
import { API_URL } from '@env'
import { useSelector, connect } from 'react-redux';
import { setReceiver } from '../../utils/redux/action/contactAction'
import axios from 'axios'

const ContactList = ({ navigation, setReceiver }) => {
  const [search, setSearch] = useState('');
  const [listContact, setContact] = useState([])
  const token = useSelector((state) => state.authReducer.token);
  const idSelected = useSelector((state) => state.contactReducer.id)

  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios
      .get(API_URL + `/tranfer/contactUser`, config)
      .then(({ data }) => {
        setContact(data.data)
      }).catch(({ response }) => {
        console.log(response.data)

      })
  }, []);

  const viewAll = () => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios
      .get(API_URL + `/tranfer/contactUser`, config)
      .then(({ data }) => {
        setContact(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }
  const handleSearch = () => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios.get(API_URL + `/tranfer/search?name=` + search, config)
      .then(({ data }) => {
        setContact(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
        setContact([])
      })
  }

  const setRecipients = (obj) => {
    setReceiver(obj)
  }

>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <SearchBar
          placeholder="Search receiver here"
          onChangeText={(val) => setSearch(val)}
          value={search}
<<<<<<< HEAD
          lightTheme={true}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
=======
          onClear={viewAll}
          lightTheme={true}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
          onSubmitEditing={handleSearch}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
        />
      </View>

      {/* List contact */}
      <View style={styles.contactHeader}>
<<<<<<< HEAD
        <Text style={{color: '#514F5B', fontSize: 20, fontWeight: '700'}}>
          Contacts
        </Text>
        <Text
          style={{
            color: '#514F5B',
            fontSize: 14,
            fontWeight: '400',
            marginTop: 10,
          }}>
          17 Contact Founds
        </Text>
      </View>
      {/* Contact card */}
      <TouchableOpacity
        style={styles.contactCard}
        onPress={() => navigate('Transfer')}>
        <View style={styles.cardWrapper}>
          <Image source={profileImg} style={styles.profileImage} />
          <View style={styles.cardText}>
            <Text style={{fontSize: 16, color: '#4D4B57', fontWeight: '700'}}>
              Samuel Suhi
            </Text>
            <Text style={{fontSize: 14, color: '#7A7886', fontWeight: '400'}}>
              +62 831-4159-1960
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactCard}>
        <View style={styles.cardWrapper}>
          <Image source={profileImg} style={styles.profileImage} />
          <View style={styles.cardText}>
            <Text style={{fontSize: 16, color: '#4D4B57', fontWeight: '700'}}>
              julia Syen
            </Text>
            <Text style={{fontSize: 14, color: '#7A7886', fontWeight: '400'}}>
              +62 831-4159-2002
            </Text>
          </View>
        </View>
      </TouchableOpacity>
=======
        <Text style={{ color: '#514F5B', fontSize: 20, fontWeight: '700' }}>
          Contacts
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#514F5B',
              fontSize: 14,
              fontWeight: '400',
              marginTop: 10,
            }}>
            {listContact.length} Contact Founds
        </Text>
          <TouchableOpacity
            onPress={viewAll}
          >
            <Text
              style={{
                color: '#514F5B',
                fontSize: 14,
                fontWeight: '400',
                marginTop: 10,
              }}>
              View All
              </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Contact card */}
      <SafeAreaView>
        <ScrollView style={{ height: vh(60) }}>
          {
            listContact && listContact.map(({ id, image, name, phone }) => {
              let nameCard = {
                id: id,
                image: image,
                name: name,
                phone: phone
              }
              const isActive = idSelected == id
              return (
                <>
                  <View style={{
                    borderColor: isActive ? 'blue' : 'white', borderWidth: 2, borderRadius: 10, marginBottom: 15, marginHorizontal: vw(1),
                    marginTop: 10,
                  }}
                    key={id}
                  >
                    <TouchableOpacity style={styles.contactCard}
                      onPress={() => setRecipients(nameCard)}
                    >

                      <View style={styles.cardWrapper}>
                        <Image source={{ uri: API_URL + image, width: 52, height: 52 }} style={styles.profileImage} />
                        <View style={styles.cardText}>
                          <Text style={{ fontSize: 16, color: '#4D4B57', fontWeight: '700' }}>
                            {name}
                          </Text>
                          <Text style={{ fontSize: 14, color: '#7A7886', fontWeight: '400', marginTop: 10 }}>
                            {phone}
                          </Text>
                        </View>
                      </View>

                    </TouchableOpacity>
                  </View>
                </>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
    </View>
  );
};

<<<<<<< HEAD
export default ContactList;
=======
const mapDispatchToProps = (dispatch) => {
  return {
    setReceiver: (data) =>
      dispatch(setReceiver(data)),
  };
};
export default connect(null, mapDispatchToProps)(ContactList);
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c

const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 15,
    elevation: 0,
<<<<<<< HEAD
    width: 405,
=======
    width: vw(97),
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
    alignSelf: 'center',
  },
  contactHeader: {
    marginTop: 20,
    padding: 10,
  },
  contactCard: {
    flexDirection: 'row',
<<<<<<< HEAD
    padding: 10,
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 10,
=======
    height: 96,
    padding: 10,
    width: vw(96),
    backgroundColor: '#fff',
    borderRadius: 10,
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
  },
  cardWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardText: {
    marginLeft: 10,
    marginTop: 3,
  },
  profileImage: {
    width: 52,
    height: 52,
  },
});
