import React,{ useState, useEffect } from "react";
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



import {loginUser} from '../../service/db/User'
import {newLogin} from '../../service/storage/newLogin'


import { useNavigation } from '@react-navigation/native'
import { style } from "./style";

export default function Login() {

const [ email, setEmail] = useState('')
const [ password, setPassword] = useState('')

const navigation = useNavigation()

async function handleLoginUser(email,password){

  await loginUser(email, password).then(res=>{    
    const newData = res.data
    const user = newData.user  
    if(newData){
      const newStorage = JSON.stringify({token: newData.token, id:user.id})     
      newLogin(`@season_APP`,newStorage)
      navigation.navigate('Home')
    }
  })
}
const loadUserData = async () => {
  try {
    await AsyncStorage.getItem('@season_APP').then(res=>{          
      if(res){
        navigation.navigate("Home")
      }
    }).catch(err=>{console.log(err)})
         
      
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário:', error);
    }
   
};
  
  useEffect(()=>{   
      loadUserData()     
},[])

return(
  <View style={style.container}>
  
    <Text style={style.title}>Seja bem vindo!</Text>
    
    <TextInput
      style={style.input}
      value={email}            
      onChangeText={(e)=>setEmail(e)}
      placeholder="Digite seu email"
    />

    <TextInput
      style={style.input}
      value={password}            
      onChangeText={(e)=>setPassword(e)}
      placeholder="Digite seu password"
    />

      <Pressable style={style.button} onPress={()=>handleLoginUser(email,password)}>
          <Text style={style.buttonText}> Logar </Text>
      </Pressable>   
    <Text> ou  </Text>

    <Pressable style={style.button} onPress={()=>navigation.navigate('CreateLogin')}>
        <Text style={style.buttonText}>Criar</Text>
    </Pressable>
    

  </View>
)}


