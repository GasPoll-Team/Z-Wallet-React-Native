import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import profileImg from '../../assets/images/profile-img.png';
import spotifyImg from '../../assets/images/spotify.png';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
      {/* Header profile user, balance info */}
      <View style={styles.header}>
        <View style={styles.profileWrapper}>
          <Image source={profileImg} style={styles.profileImage} />
          <View style={styles.balanceWrapper}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
              Balance
            </Text>
            {/* Price will integrated with backend */}
            <Text style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
              Rp. 120.000
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{marginTop: 75}}>
          <Icon name="bell-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Button action */}
      <View style={styles.btnWrapper}>
        <View>
          <Button
            title="Transfer"
            icon={<Icon name="plus" size={25} color="#608DE2" />}
            buttonStyle={styles.btn}
            titleStyle={styles.btnText}
            onPress={() => navigation.navigate('Contact')}
          />
        </View>
        <Button
          title="Top Up"
          icon={<Icon name="arrow-up" size={25} color="#608DE2" />}
          buttonStyle={styles.btn}
          titleStyle={styles.btnText}
        />
      </View>

      {/* Transaction history */}
      <View>
        <View style={styles.transactionHeader}>
          <Text style={{color: '#514F5B', fontSize: 18, fontWeight: '700'}}>
            Transaction History
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#6379F4', fontSize: 14, marginTop: 1}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        {/* Card transaction */}
        <TouchableOpacity style={styles.cardTransaction}>
          <View style={styles.cardWrapper}>
            <Image source={profileImg} style={styles.profileImage} />
            <View style={styles.cardText}>
              <Text style={{fontSize: 16, color: '#4D4B57', fontWeight: '700'}}>
                Samuel Suhi
              </Text>
              <Text style={{fontSize: 14, color: '#4D4B57', fontWeight: '400'}}>
                Transfer
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: '#1EC15F',
              fontWeight: '700',
              marginTop: 20,
            }}>
            +Rp50.000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTransaction}>
          <View style={styles.cardWrapper}>
            <Image source={spotifyImg} style={styles.profileImage} />
            <View style={styles.cardText}>
              <Text style={{fontSize: 16, color: '#4D4B57', fontWeight: '700'}}>
                Spotify
              </Text>
              <Text style={{fontSize: 14, color: '#4D4B57', fontWeight: '400'}}>
                Subscription
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: '#FF5B37',
              fontWeight: '700',
              marginTop: 20,
            }}>
            -Rp49.000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTransaction}>
          <View style={styles.cardWrapper}>
            <Image source={spotifyImg} style={styles.profileImage} />
            <View style={styles.cardText}>
              <Text style={{fontSize: 16, color: '#4D4B57', fontWeight: '700'}}>
                Spotify
              </Text>
              <Text style={{fontSize: 14, color: '#4D4B57', fontWeight: '400'}}>
                Subscription
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: '#FF5B37',
              fontWeight: '700',
              marginTop: 20,
            }}>
            -Rp150.000
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 195,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 52,
    height: 52,
  },
  profileWrapper: {
    flexDirection: 'row',
    marginTop: 69,
  },
  balanceWrapper: {
    marginLeft: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
  },
  btn: {
    width: 200,
    height: 57,
    backgroundColor: '#E5E8ED',
    borderRadius: 10,
  },
  btnText: {
    color: '#514F5B',
    marginLeft: 10,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
  },
  cardTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
