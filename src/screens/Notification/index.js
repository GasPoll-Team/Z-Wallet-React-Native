import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import profileImg from '../../assets/images/profile-img.png';

const Notification = () => {
  return (
    <ScrollView>
      <View style={styles.header} />
      {/* Today notification */}
      <View style={styles.wrapper}>
        <Text style={{color: '#514F5B', fontSize: 16, fontWeight: '400'}}>
          Today
        </Text>
        <TouchableOpacity style={styles.notifCard}>
          <View style={styles.cardWrapper}>
            <Icon name="arrow-up" size={25} color="#FF5B37" />
            <View style={styles.cardText}>
              <Text style={{fontSize: 14, color: '#7A7A7A', fontWeight: '400'}}>
                Netflix subscription
              </Text>
              <Text style={{fontSize: 18, color: '#43484F', fontWeight: '700'}}>
                Rp220.000
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* This week */}
      <View style={styles.wrapper}>
        <Text style={{color: '#514F5B', fontSize: 16, fontWeight: '400'}}>
          This Week
        </Text>
        <TouchableOpacity style={styles.notifCard}>
          <View style={styles.cardWrapper}>
            <Icon name="arrow-up" size={25} color="#FF5B37" />
            <View style={styles.cardText}>
              <Text style={{fontSize: 14, color: '#7A7A7A', fontWeight: '400'}}>
                Netflix subscription
              </Text>
              <Text style={{fontSize: 18, color: '#43484F', fontWeight: '700'}}>
                Rp220.000
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notifCard}>
          <View style={styles.cardWrapper}>
            <Icon name="arrow-down" size={25} color="#4CEDB3" />
            <View style={styles.cardText}>
              <Text style={{fontSize: 14, color: '#7A7A7A', fontWeight: '400'}}>
                Top up from BNI E-Banking
              </Text>
              <Text style={{fontSize: 18, color: '#43484F', fontWeight: '700'}}>
                Rp620.000
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  notifCard: {
    flexDirection: 'row',
    padding: 10,
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
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
