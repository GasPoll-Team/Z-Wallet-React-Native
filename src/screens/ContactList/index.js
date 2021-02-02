import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
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

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <SearchBar
          placeholder="Search receiver here"
          onChangeText={(val) => setSearch(val)}
          value={search}
          onClear={viewAll}
          lightTheme={true}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
          onSubmitEditing={handleSearch}
        />
      </View>

      {/* List contact */}
      <View style={styles.contactHeader}>
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
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setReceiver: (data) =>
      dispatch(setReceiver(data)),
  };
};
export default connect(null, mapDispatchToProps)(ContactList);

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
    width: vw(97),
    alignSelf: 'center',
  },
  contactHeader: {
    marginTop: 20,
    padding: 10,
  },
  contactCard: {
    flexDirection: 'row',
    height: 96,
    padding: 10,
    width: vw(96),
    backgroundColor: '#fff',
    borderRadius: 10,
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
