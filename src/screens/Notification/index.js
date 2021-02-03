import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { API_URL } from '@env'

const Notification = ({ props }) => {
  const [today, setToday] = useState([])
  const [thisweek, setThisWeek] = useState([])
  const token = useSelector((state) => state.authReducer.token);
  const config = {
    headers: {
      'x-access-token': 'bearer ' + token,
    },
  };
  const getToday = () => {
    axios.get(API_URL + `/home/getAllInvoice?today=true`, config)
      .then(({ data }) => {
        setToday(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }

  const getThisWeek = () => {
    axios.get(API_URL + `/home/getAllInvoice?thisWeek=true`, config)
      .then(({ data }) => {
        setThisWeek(data.data)
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  useEffect(() => {
    getToday()
    getThisWeek()
  }, [])

  return (
    <ScrollView>
      <View style={styles.header} />
      {/* Today notification */}
      <View style={styles.wrapper}>
        <Text style={{ color: '#514F5B', fontSize: 16, fontWeight: '400' }}>
          Today
        </Text>
        {
          today && today.map(({ id, name, notes, type, amount }) => {
            if (type == 'out') {
              return (
                <>
                  <TouchableOpacity style={styles.notifCard} key={id}>
                    <View style={styles.cardWrapper}>
                      <Icon name="arrow-up" size={25} color="#FF5B37" />
                      <View style={styles.cardText}>
                        <Text style={{ fontSize: 14, color: '#7A7A7A', fontWeight: '400' }}>
                          {notes}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#43484F', fontWeight: '700' }}>
                          Rp. {toPrice(amount)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )
            } else {
              return (
                <>
                  <TouchableOpacity style={styles.notifCard}>
                    <View style={styles.cardWrapper}>
                      <Icon name="arrow-down" size={25} color="#4CEDB3" />
                      <View style={styles.cardText}>
                        <Text style={{ fontSize: 14, color: '#7A7A7A', fontWeight: '400' }}>
                          {notes} from {name}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#43484F', fontWeight: '700' }}>
                          Rp. {toPrice(amount)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )
            }
          })
        }
      </View>

      {/* This week */}
      <View style={styles.wrapper}>
        <Text style={{ color: '#514F5B', fontSize: 16, fontWeight: '400' }}>
          This Week
        </Text>
        {
          thisweek && thisweek.map(({ id, name, notes, type, amount }) => {
            if (type == 'out') {
              return (
                <>
                  <TouchableOpacity style={styles.notifCard}>
                    <View style={styles.cardWrapper}>
                      <Icon name="arrow-up" size={25} color="#FF5B37" />
                      <View style={styles.cardText}>
                        <Text style={{ fontSize: 14, color: '#7A7A7A', fontWeight: '400' }}>
                          {notes}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#43484F', fontWeight: '700' }}>
                          Rp. {toPrice(amount)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )
            } else {
              return (
                <>
                  <TouchableOpacity style={styles.notifCard}>
                    <View style={styles.cardWrapper}>
                      <Icon name="arrow-down" size={25} color="#4CEDB3" />
                      <View style={styles.cardText}>
                        <Text style={{ fontSize: 14, color: '#7A7A7A', fontWeight: '400' }}>
                          {notes} dari {name}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#43484F', fontWeight: '700' }}>
                          Rp. {toPrice(amount)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )
            }
          })
        }
      </View>
    </ScrollView >
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
