import React from 'react'
import { View } from 'react-native'

import API from '../../components/Anime/API'
import Header from '../../components/Header'



import { styles } from './style'

const Home = () => {
    
  return (
    <View style={styles.container} >
      <Header page='Home'/>
      <API/>    
     


    </View>
  )
}

export default Home;