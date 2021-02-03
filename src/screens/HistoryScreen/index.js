import React, {useEffect, useState, createRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ActionSheet from 'react-native-actions-sheet';

import {API_URL} from '@env';
import {vw, vh, vmax, vmin} from 'react-native-expo-viewport-units';
import {useSelector, connect} from 'react-redux';
import axios from 'axios';

// ariefwidiyatmoko38@gmail.com
// Gaspoll19

const HistoryScreen = ({navigation, route}) => {
  const actionSheetRef = createRef();

  const [historyWeek, setHistoryWeek] = useState();
  const [historyMonth, setHistoryMonth] = useState();

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const token = useSelector((state) => state.authReducer.token);

  const getDataWeek = () => {
    axios
      .get(`${API_URL}/home/getAllInvoice?thisWeek=true`, {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      })
      .then(({data}) => {
        console.log('Datanya Week', data.data);
        setHistoryWeek(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getDataMonth = () => {
    axios
      .get(`${API_URL}/home/getAllInvoice?thisMonth=true`, {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      })
      .then(({data}) => {
        console.log('Datanya Month', data.data);
        setHistoryMonth(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getDataWeekIn = () => {
    axios
      .get(`${API_URL}/home/getAllInvoice?thisWeek=true&flow=in`, {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      })
      .then(({data}) => {
        console.log('Datanya WeekIN', data.data);
        setHistoryWeek(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getDataMonthIn = () => {
    axios
      .get(`${API_URL}/home/getAllInvoice?thisMonth=true&flow=in`, {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      })
      .then((res) => {
        const monthIn = res.data.data;
        console.log('Datanya MonthIN', monthIn);
        setHistoryMonth(monthIn);
      })
      .catch((err) => console.log(err));
  };

  const getDataIn = () => {
    getDataWeekIn();
    getDataMonthIn();
  };
  // GetDataWeek
  useEffect(() => {
    getDataWeek();
    getDataMonth();
  }, [token]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}></View>

      {/*  Week */}
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View>
            <View>
              <View style={styles.transactionHeader}>
                <Text
                  style={{color: '#514F5B', fontSize: 18, fontWeight: '700'}}>
                  This Week
                </Text>
              </View>
              {/* Card transaction */}
              {historyWeek !== undefined
                ? historyWeek.map((data) => (
                    <View style={styles.cardTransaction} key={data.id}>
                      <View style={styles.cardWrapper}>
                        <Image
                          source={{uri: `${API_URL}${data.image}`}}
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
                              marginTop: 10,
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
                          -Rp. {toPrice(data.amount)}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'green',
                            fontWeight: '700',
                            marginTop: 20,
                          }}>
                          +Rp. {toPrice(data.amount)}
                        </Text>
                      )}
                    </View>
                  ))
                : null}
            </View>

            <View>
              <View style={styles.transactionHeader}>
                <Text
                  style={{color: '#514F5B', fontSize: 18, fontWeight: '700'}}>
                  This Month
                </Text>
              </View>
              {/* Card transaction */}
              {historyMonth !== undefined
                ? historyMonth.map((data) => (
                    <View style={styles.cardTransaction} key={data.id}>
                      <View style={styles.cardWrapper}>
                        <Image
                          source={{uri: `${API_URL}${data.image}`}}
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
                              marginTop: 10,
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
                          -Rp. {toPrice(data.amount)}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'green',
                            fontWeight: '700',
                            marginTop: 20,
                          }}>
                          +Rp. {toPrice(data.amount)}
                        </Text>
                      )}
                    </View>
                  ))
                : null}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomSortings}>
        <View style={styles.btnUpDown}>
          <TouchableOpacity onPress={() => Alert.alert('ANJIM')}>
            <Icon name="arrowup" color="#FF5B37" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnUpDown}>
          <TouchableOpacity onPress={getDataIn}>
            <Icon name="arrowdown" color="#6379F4" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnDaterange}>
          <TouchableOpacity
            // onPress={() => setVisible(true)}>
            onPress={() => actionSheetRef.current?.setModalVisible()}>
            <Text style={{color: '#6379F4', fontSize: 20, fontWeight: 'bold'}}>
              Filter By Date
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Sheet */}
      <ActionSheet ref={actionSheetRef}>
        <View>
          <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
        </View>
      </ActionSheet>
    </>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 30,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
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
    width: vw(96),
    marginHorizontal: vw(2),
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
  profileWrapper: {
    flexDirection: 'row',
    marginTop: 69,
  },
  bottomSortings: {
    bottom: 0,
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnUpDown: {
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '20%',
    margin: 2,
  },
  btnDaterange: {
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '60%',
    margin: 2,
  },
});
