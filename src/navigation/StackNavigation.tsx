

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SunbjectsScreen } from '../screens/SunbjectsScreen';
import SubjectScreen from '../screens/SubjectScreen';
import { HomeScreen } from '../screens/common/HomeScreen';
// import { ISubject } from '../interfaces/ISubject';
import AcademicsScreen from '../screens/common/AcademicsScreen';

export type StackParams = {
  Home: undefined,
  Subjects: undefined,
  Subject: ISubject 
  Academics: undefined,
};


const Stack = createNativeStackNavigator<StackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Subject'>
      {/* <Stack.Screen name="Academics" component={AcademicsScreen} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="Subjects" component={SunbjectsScreen} /> */}
      {/* <Stack.Screen name="Subject" component={SubjectScreen} /> */}
      <Stack.Screen name="Academics" component={AcademicsScreen} />

    </Stack.Navigator>
  );
}

export default StackNavigation