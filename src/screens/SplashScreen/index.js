import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.background}>
      {/* <Image source={LogoSplash} /> */}
      <Text style={{fontSize: 30, color: 'white'}}>Zwallet</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6379F4',
  },
});
