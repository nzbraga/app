import { View, Text, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import {usersById} from '../../service/db/User'
import { useNavigation } from '@react-navigation/native';
  
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  
   

  const [user, setUser] = useState({})
  const [userId, setUserId] = useState('')
  const [tokenId, setTokenId] = useState('')

  const navigation = useNavigation()
  
  const handleLogOut = async () => {
    try {     
      await AsyncStorage.removeItem(`@season_APP`);
       navigation.navigate('Login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('@season_APP')
        const data = JSON.parse(userData)
        const id = data.id
        
        const token = data.token
        setUserId(id)
        setTokenId(token)

        await usersById(id,token).then((data)=>{
          const dataId = data.user         
          setUser(dataId)
        }).catch(err=>{
          console.log(err)
        })        
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      }
     
  };
    
    useEffect(()=>{   
        loadUserData()     
  },[])
 

  const {id,name,email} = user
  return (
    <View>
      
      <Text>Home</Text>     
      <Text>Seja Bem Vindo</Text>     
      <Text>{user.name}</Text>  
      <Pressable onPress={()=>{handleLogOut()}}>
        <Text> LogOut </Text>
      </Pressable>   
    

    </View>
  )
}

