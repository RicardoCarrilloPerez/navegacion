import React from 'react'
import { Button, Text, View } from 'react-native'




export const SunbjectsScreen = ({ navigation: { navigate }}: any) => {
  return (

    <View>
      <Text>Mis cursos</Text>
      <Button
      title="Go to Details"
      onPress={() => navigate('Subject')}
      />
    </View>
    )
}

export default SunbjectsScreen