import React, {useState, useEffect} from 'react';
import {Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import profile from '../../assets/images/profile-img.png';

const ProfileScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((f) => !f);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.content}>
        <Image source={profile} style={styles.imguser} />
        <TouchableOpacity style={styles.edit}>
          <Icon name="edit-2" color="#7A7886" />
          <Text style={styles.txtedit}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.name}>Akbar Zulfikar</Text>
        <Text style={styles.phone}>+62......</Text>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => navigation.navigate('Personal')}>
          <Text style={styles.nameOperation}>Personal Information</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => {
            navigation.navigate('Change');
          }}>
          <Text style={styles.nameOperation}>Change Password</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listOperation}
          onPress={() => {
            navigation.navigate('ChangePIN');
          }}>
          <Text style={styles.nameOperation}>Change PIN</Text>
          <Icon name="arrow-right" size={20} color="#4D4B57" />
        </TouchableOpacity>

        <View style={styles.listOperation}>
          <Text style={styles.nameOperation}>Notification</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
        </View>

        <TouchableOpacity
          style={styles.listOperation}>
          <Text style={styles.nameOperation}>Logout</Text>
          {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    // marginTop: 90,
  },
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  imguser: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  edit: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtedit: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7A7886',
  },
  name: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 30,
  },
  listOperation: {
    backgroundColor: '#E5E8ED',
    padding: 27,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameOperation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D4B57',
  },
});

export default ProfileScreen;
