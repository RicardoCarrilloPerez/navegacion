import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { StackParams } from '../navigation/StackNavigation'

interface Props extends NativeStackScreenProps<StackParams, 'Subject'>{};


export const SubjectScreen = ({ navigation: { navigate }} :  Props) => {
  return (
    <View>
      <Text>Mi curso</Text>
    </View>
  )
}

export default SubjectScreen
