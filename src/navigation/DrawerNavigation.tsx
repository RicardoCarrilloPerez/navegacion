import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from './StackNavigation';
import AcademicsScreen from '../screens/common/AcademicsScreen';
import { ProfileScreen } from '../screens/common/ProfileScreen';
import { AboutScreen } from '../screens/common/AboutScreen';



const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


  return (

    <Drawer.Navigator initialRouteName='Profile'>
        <Drawer.Screen name='StackNavigation' options={{ title: 'Home' }} component={StackNavigation}/>
        <Drawer.Screen name='Academics' component={AcademicsScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='About' component={AboutScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation