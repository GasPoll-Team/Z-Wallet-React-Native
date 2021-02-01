import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

// import React, {useContext} from 'react';
// import { MainNavigation } from './src/navigation';

// function App() {
//   return (
//     <MainNavigation />
//   )
// }

// export default App;
