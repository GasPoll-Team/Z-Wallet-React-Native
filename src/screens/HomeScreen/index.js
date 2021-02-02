import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
import {useSelector} from 'react-redux';
import {vw, vh, vmax, vmin} from 'react-native-expo-viewport-units';
import {API_URL} from '@env';

console.log(API_URL);

import profileImg from '../../assets/images/profile-img.png';
import spotifyImg from '../../assets/images/spotify.png';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState();
  const [history, setHistory] = useState();

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const token = useSelector((state) => state.authReducer.token);

  // 192.168.8.100 bisa diganti sama IP laptop kalian/ pake backend deploy
  const url = 'http://192.168.1.2:8000';

  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios
      .get(`${url}/home/getBalance`, config)
      .then(({data}) => {
        console.log(typeof data.data.balance);
        setUser(data.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios
      .get(`${url}/home/getAllInvoice?from=2021-01-15&to=2021-02-01`, config)
      .then(({data}) => {
        setHistory(data.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <>
      {token != null ? (
        <ScrollView>
          <StatusBar translucent backgroundColor="transparent" />
          {/* Header profile user, balance info */}
          <View style={styles.header}>
            <View style={styles.profileWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Image source={profileImg} style={styles.profileImage} />
              </TouchableOpacity>

              <View style={styles.balanceWrapper}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
                  Balance
                </Text>
                {/* Price will integrated with backend */}
                <Text style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
                  Rp. {user !== undefined ? toPrice(user.balance) : null}
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
              onPress={() => navigation.navigate('Topup')}
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
            {history !== undefined
              ? history.map((data) => (
                  <TouchableOpacity
                    style={styles.cardTransaction}
                    key={data.id}>
                    <View style={styles.cardWrapper}>
                      <Image
                        source={{uri: `http://192.168.1.2:8000/${data.image}`}}
                        style={styles.profileImage}
                      />
                      <View style={styles.cardText}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#4D4B57',
                            fontWeight: '700',
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#4D4B57',
                            fontWeight: '400',
                          }}>
                          {data.notes}
                        </Text>
                      </View>
                    </View>
                    {data.type === 'out' ? (
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#FF5B37',
                          fontWeight: '700',
                          marginTop: 20,
                        }}>
                        -Rp{toPrice(data.amount)}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'green',
                          fontWeight: '700',
                          marginTop: 20,
                        }}>
                        +Rp{toPrice(data.amount)}
                      </Text>
                    )}
                  </TouchableOpacity>
                ))
              : null}
          </View>
        </ScrollView>
      ) : (
        navigation.replace('Login')
      )}
    </>
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
    width: vw(45),
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
