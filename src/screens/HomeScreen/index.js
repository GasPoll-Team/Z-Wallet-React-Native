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
<<<<<<< HEAD
import {useSelector} from 'react-redux';
import {vw, vh, vmax, vmin} from 'react-native-expo-viewport-units';
import {API_URL} from '@env';

console.log(API_URL);

import profileImg from '../../assets/images/profile-img.png';
import spotifyImg from '../../assets/images/spotify.png';

const HomeScreen = ({navigation}) => {
=======
import {useSelector, connect} from 'react-redux';
import {setDataUser} from '../../utils/redux/action/myDataAction';
import {vw, vh, vmax, vmin} from 'react-native-expo-viewport-units';
import {API_URL} from '@env';

import profileImg from '../../assets/images/profile-img.png';
import spotifyImg from '../../assets/images/spotify.png';

const HomeScreen = ({navigation, setDataUser}) => {
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
  const [user, setUser] = useState();
  const [history, setHistory] = useState();

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const token = useSelector((state) => state.authReducer.token);

  // 192.168.8.100 bisa diganti sama IP laptop kalian/ pake backend deploy
<<<<<<< HEAD
  const url = 'http://192.168.1.2:8000';
=======
  const url = API_URL;
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c

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
<<<<<<< HEAD
=======
        setDataUser(data.data);
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
<<<<<<< HEAD
      .get(`${url}/home/getAllInvoice?from=2021-01-15&to=2021-02-01`, config)
=======
      .get(`${url}/home/getAllInvoice?thisWeek=true`, config)
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
<<<<<<< HEAD
                  navigation.navigate('Login');
                }}>
                <Image source={profileImg} style={styles.profileImage} />
=======
                  navigation.navigate('Profile');
                }}>
                {user !== undefined ? (
                  <Image
                    source={{uri: API_URL + user.image, width: 52, height: 52}}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image
                    source={{
                      uri:
                        'http://damuthtaxidermy.com/Content/Staff-Gary-Damuth.png',
                      width: 52,
                      height: 52,
                    }}
                    style={styles.profileImage}
                  />
                )}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
              </TouchableOpacity>

              <View style={styles.balanceWrapper}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
<<<<<<< HEAD
                  Balance
=======
                  {user !== undefined ? user.name : ''}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
                </Text>
                {/* Price will integrated with backend */}
                <Text style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
                  Rp. {user !== undefined ? toPrice(user.balance) : null}
                </Text>
              </View>
            </View>
<<<<<<< HEAD
            <TouchableOpacity style={{marginTop: 75}}>
=======
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              style={{marginTop: 75}}>
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
<<<<<<< HEAD
                        source={{uri: `http://192.168.1.2:8000/${data.image}`}}
=======
                        source={{uri: `${API_URL}${data.image}`}}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
<<<<<<< HEAD
=======
                            marginTop: 10,
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
<<<<<<< HEAD
                        -Rp{toPrice(data.amount)}
=======
                        -Rp. {toPrice(data.amount)}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'green',
                          fontWeight: '700',
                          marginTop: 20,
                        }}>
<<<<<<< HEAD
                        +Rp{toPrice(data.amount)}
=======
                        +Rp. {toPrice(data.amount)}
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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

<<<<<<< HEAD
export default HomeScreen;
=======
const mapDispatchToProps = (dispatch) => {
  return {
    setDataUser: (data) => dispatch(setDataUser(data)),
  };
};
export default connect(null, mapDispatchToProps)(HomeScreen);
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c

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
<<<<<<< HEAD
=======
    width: vw(96),
    marginHorizontal: vw(2),
>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
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
