import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { logOut } from '../../service/storage/localUser';
import { usersById } from '../../service/db/User'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import styles from './style';


const Header = () => {

  const [user, setUser] = useState({})
  const [userId, setUserId] = useState('')
  const [tokenId, setTokenId] = useState('')


  const navigation = useNavigation()

  function handleLogOut() {
    const logUser = logOut().then(() => {
      { logUser ? navigation.navigate("Login") : console.log("Erro ao Deslogar") }
    })
  }

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('@season_APP')
      const data = JSON.parse(userData)
      const id = data.id
      const token = data.token
      //console.log(data)
      setUser(data)
      setUserId(id)
      setTokenId(token)

      await usersById(id, token).then((data) => {
        const dataId = data.user
        setUser(dataId)
        //console.log(dataId)
      }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário:', error);
    }

  };

  useEffect(() => {

    loadUserData()
    //console.log(user)

  }, [])


  return (


    <View style={styles.header}>

      <View style={styles.user}>
        <Image
          style={styles.image}
          source={require('../img/photo.jpg')}
        />
        <TouchableOpacity style={styles.headerNameBtn}
          onPress={() => nav.navigate('Home')}                >
          <Text style={styles.headerName}> {user.name} </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => nav.navigate('Home')}
        >
          <Text>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => nav.navigate('Favorites')}
        >
          <Text>♥️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleLogOut()}
        >
          <Text>🚪</Text>
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require('../img/icon-anima.jpg')}
        />

      </View>

    </View>

  )
}

export default Header