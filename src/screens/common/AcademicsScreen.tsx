import React from 'react'
import { Text, View } from 'react-native'
import SunbjectsScreen from '../SunbjectsScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack';


interface Props extends NativeStackScreenProps<any, any>{};

export const AcademicsScreen = ({ route, navigation }: Props) => {

    console.log('My props', navigation );

  return (
    <View>
        <SunbjectsScreen navigation={navigation}/>
    </View>
  )
}

export default AcademicsScreen
