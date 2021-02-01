import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SearchBar, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import profileImg from '../../assets/images/profile-img.png';

const ContactList = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <SearchBar
          placeholder="Search receiver here"
          onChangeText={(val) => setSearch(val)}
          value={search}
          lightTheme={true}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
        />
      </View>

      {/* List contact */}
      <View style={styles.contactHeader}>
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
      <TouchableOpacity style={styles.contactCard}>
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
    </View>
  );
};

export default ContactList;

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
    width: 405,
    alignSelf: 'center',
  },
  contactHeader: {
    marginTop: 20,
    padding: 10,
  },
  contactCard: {
    flexDirection: 'row',
    padding: 10,
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 10,
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
