import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';




export const App = () => {
  return (
    
      
  <NavigationContainer>
     <StackNavigation/>
     <DrawerNavigation/>
  </NavigationContainer>
    
  );
};

export default App;
