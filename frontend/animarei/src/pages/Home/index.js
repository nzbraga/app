import React from 'react'
import { View, Text } from 'react-native'

import API from '../../components/Anime/API'
import Header from '../../components/Header'
import Favorite from '../../components/Favorite'

import { styles } from './style'

export default function Home() {

  return (
    <View style={styles.container} >
      <Header />
      <API/> 
      <Favorite/>


    </View>
  )
}

