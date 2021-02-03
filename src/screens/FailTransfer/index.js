import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import user from '../../assets/images/profile-img.png';

const FailTransfer = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 30,
            }}>
            Transfer Details
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.status}>
          <View style={styles.rounded}>
            <Icon name="x" size={40} color="white" />
          </View>
          <Text style={styles.textStatus}>Transfer Success</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.subContent}>
            <View style={styles.content2}>
              <Text style={styles.title}>Amount</Text>
              <Text style={styles.item}>Rp. 10000</Text>
            </View>

            <View style={styles.content3}>
              <Text style={styles.title}>Balance Left</Text>
              <Text style={styles.item}>Rp. 1000</Text>
            </View>
          </View>

          <View style={styles.subContent}>
            <View style={styles.content2}>
              <Text style={styles.title}>Date</Text>
              <Text style={styles.item}>May, 11, 2020</Text>
            </View>

            <View style={styles.content3}>
              <Text style={styles.title}>Time</Text>
              <Text style={styles.item}>12.20</Text>
            </View>
          </View>

          <View style={styles.subList}>
            <Text style={styles.title}>Notes</Text>
            <Text style={styles.item}>ini Test</Text>
          </View>

          <Text style={styles.from}>From</Text>

          <View style={styles.receiver}>
            <View style={styles.contact}>
              <View>
                <Image source={user} style={styles.imgUser} />
              </View>
              <View>
                <Text style={styles.name}>Akbar Zulfikar</Text>
                <Text style={styles.num}>+62.........</Text>
              </View>
            </View>
          </View>

          <Text style={styles.from}>To</Text>

          <View style={styles.receiver}>
            <View style={styles.contact}>
              <View>
                <Image source={user} style={styles.imgUser} />
              </View>
              <View>
                <Text style={styles.name}>Akbar Zulfikar</Text>
                <Text style={styles.num}>+62.........</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={{ marginBottom: 25 }}>
        <TouchableOpacity
          style={styles.btnActive}
        >
          <Text style={styles.textActive}>
            Try again
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 110,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  status: {
    alignSelf: 'center',
    marginTop: 40,
    alignItems: 'center',
  },
  rounded: {
    width: 65,
    height: 65,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  textStatus: {
    color: '#4D4B57',
    fontSize: 22,
  },
  content: {
    paddingTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#7A7886',
    lineHeight: 22,
    // marginBottom: 10,
  },
  item: {
    color: '#514F5B',
    fontSize: 17,
    fontWeight: 'bold',
    // marginBottom: 18,
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content2: {
    width: '40%',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  content3: {
    width: '40%',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginLeft: 50,
  },
  subList: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  from: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
  receiver: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: -3,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  contact: {
    padding: 13,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  imgUser: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 18,
  },
  name: {
    color: '#4D4B57',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  num: {
    color: '#7A7886',
    fontSize: 15,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default FailTransfer;
