import { View, Text } from 'react-native'
import React from 'react'

const NoFavourites = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000', fontSize: 30,}}>No favourites</Text>
    </View>
  )
}

export default NoFavourites