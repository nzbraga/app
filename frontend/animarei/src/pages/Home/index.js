import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usersById } from '../../service/db/User'
import { useNavigation } from '@react-navigation/native';

import { logOut} from '../../service/storage/handleLogin';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home() {
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState('')
  const [tokenId, setTokenId] = useState('')
  

const navigation = useNavigation()
 
function handleLogOut(){
  const logUser = logOut().then(()=>{
    { logUser ? navigation.navigate("Login"):console.log("Erro aon Deslogar") }
  })
}

const loadUserData = async () => {
 //console.log('1')
 try {
   //console.log('2')
   const userData = await AsyncStorage.getItem('@season_APP')
   //console.log('2')
   const data = JSON.parse(userData)
   const id = data.id        
   const token = data.token
   //console.log(data)
   setUser(data)
   setUserId(id)
   setTokenId(token)
   //console.log('3')

   await usersById(id,token).then((data)=>{
       //console.log('4')
       const dataId = data.user         
       setUser(dataId)
       //console.log(dataId)
       //console.log('5')
     }).catch(err=>{
       //console.log(err)
     })        
   } catch (error) {
     console.error('Erro ao carregar os dados do usuário:', error);
   }
   //console.log('6')
  
};
 

  

  useEffect(() => {
    if (!userId) {
      loadUserData()
    }
   // console.log(userId)
    //console.log('useEffect>>>')
  }, [user])


  const { id, name, email } = user
  return (
    <View>

      <Text>Home</Text>
      <Text>Seja Bem Vindo</Text>
      <Text>{user.name}</Text>

      <Pressable onPress={() => handleLogOut() }>
        <Text> LogOut </Text>
      </Pressable>


    </View>
  )
}

