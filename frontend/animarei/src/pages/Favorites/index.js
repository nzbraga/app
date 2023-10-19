import { View, Text } from 'react-native'
import React from 'react'

import Favorite from '../../components/Favorite'
import Headers from '../../components/Header'

export default function Favorites() {
  return (
    <View style={{height:"100%", backgroundColor:"#fdffdd"}}>
      <Headers/>
      <Favorite/>      
    </View>
  )
}