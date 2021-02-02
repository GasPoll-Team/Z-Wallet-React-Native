import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Image, Button} from 'react-native-elements';

import profileImg from '../../assets/images/profile-img.png';

const ConfirmScreen = () => {
  return (
    <View>
      <View style={styles.header}>
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
      </View>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.cardHead}>Amount</Text>
          <Text style={styles.cardDesc}>Rp100.000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHead}>Balance Left</Text>
          <Text style={styles.cardDesc}>Rp20.000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHead}>Date</Text>
          <Text style={styles.cardDesc}>May 11, 2020</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHead}>Time</Text>
          <Text style={styles.cardDesc}>12.20</Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <View style={styles.cardNotes}>
          <Text style={styles.cardHead}>Notes</Text>
          <Text style={styles.cardDesc}>For buying some socks</Text>
        </View>
      </View>
      <View style={styles.btnFooter}>
        <Button title="Continue" buttonStyle={{height: 57, borderRadius: 15}} />
      </View>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    justifyContent: 'center',
  },
  contactCard: {
    flexDirection: 'row',
    padding: 10,
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 30,
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
  card: {
    backgroundColor: '#fff',
    width: '47%',
    borderRadius: 15,
    height: 87,
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
  },
  cardNotes: {
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 87,
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
  },
  wrapper: {
    flexWrap: 'wrap',
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  cardHead: {fontSize: 16, fontWeight: '400', color: '#7A7886'},
  cardDesc: {fontSize: 18, fontWeight: '700', color: '#514F5B', marginTop: 5},
  btnFooter: {
    padding: 10,
    marginTop: 40,
  },
});
