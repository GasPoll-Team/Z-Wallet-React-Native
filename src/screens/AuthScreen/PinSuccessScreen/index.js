import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PinScreen from '../PinScreen';

const PinSucessScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Zwallet</Text>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <View style={styles.circle}>
            <Icon name="check" color="white" size={50} />
          </View>
          <View>
            <Text style={styles.pinSuc}>PIN successfully Created</Text>
            <Text style={styles.success}>
              Your PIN was successfully created and you can now access all the
              features in Zwallet. Login to your new account and start
              exploring!
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <TouchableOpacity style={styles.btnActive} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textActive}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 190,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    paddingBottom: 40,
    borderTopWidth: 0.5,
    borderColor: '#EEEEEE',
    elevation: 1,
  },
  name: {
    // marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 130,
    fontSize: 26,
    fontWeight: 'bold',
  },
  subContent: {
    marginTop: 30,
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 80,
    height: 80,
    backgroundColor: '#1EC15F',
    borderRadius: 80,
    marginBottom: 20,
  },
  pinSuc: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  success: {
    textAlign: 'center',
    fontSize: 14,
    color: '#88888F',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  form: {
    marginTop: 10,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default PinSucessScreen;
