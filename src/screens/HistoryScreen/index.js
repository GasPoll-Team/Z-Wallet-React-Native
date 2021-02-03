import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {API_URL} from '@env';
import {vw, vh, vmax, vmin} from 'react-native-expo-viewport-units';
import {useSelector, connect} from 'react-redux';
import axios from 'axios';

const HistoryScreen = () => {
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
        console.log('Datanya ', data.data);
        setHistoryWeek(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getDataMonth = () => {
    axios
      .get(`${API_URL}/getAllInvoice?thisMonth=true`, {
        headers: {
          'x-access-token': 'bearer ' + token,
        },
      })
      .then(({data}) => {
        console.log('Datanya ', data.data);
        setHistoryWeek(data.data);
      })
      .catch((err) => console.log(err));
  };

  // GetDataWeek
  useEffect(() => {
    getDataWeek();
    getDataMonth()
  }, [token]);

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}></View>

      {/*  Week */}
      <ScrollView>
        <View>
          <View style={styles.transactionHeader}>
            <Text style={{color: '#514F5B', fontSize: 18, fontWeight: '700'}}>
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
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
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
});
