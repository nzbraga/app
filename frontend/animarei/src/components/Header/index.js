import React, { useEffect, useState } from 'react'
import { View, Pressable, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logOut } from '../../service/storage/localUser';


import styles from './style';


const Header = () => {

  const [user, setUser] = useState({})

  const navigation = useNavigation()

  function handleLogOut() {
    const logUser = logOut().then(() => {
      { logUser ? navigation.navigate("Login") : console.log("Erro ao Deslogar") }
    })
  }

  const loadUserData = async () => {
    try {
      await AsyncStorage.getItem('@season_APP').then(res=>{          
      const newUser = JSON.parse(res)       
        setUser(newUser)    
      }).catch(err=>{console.log(err)})        
        
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      }
     
  };

  useEffect(() => {
    loadUserData() 

  }, [])


  return (


    <View style={styles.header}>

      <View style={styles.user}>
        <Image
          style={styles.image}
          source={require('../img/photo.jpg')}
        />
        <Pressable style={styles.headerNameBtn}
          onPress={() => navigation.navigate('Home')}                >
          <Text style={styles.headerName}>{user.name}</Text>
        </Pressable>
      </View>

      <View style={styles.nav}>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>🏠</Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Text>♥️</Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => handleLogOut()}
        >
          <Text>🚪</Text>
        </Pressable>

        <Image
          style={styles.logo}
          source={require('../img/icon-anima.jpg')}
        />

      </View>

    </View>

  )
}

export default Header