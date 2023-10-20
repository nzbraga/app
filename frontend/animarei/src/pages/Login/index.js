import React,{ useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import {loginUser} from '../../service/db/User'
import {newLogin} from '../../service/storage/localUser'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native'
import { style } from "./style";

export default function Login() {

const [ user, setUser] = useState({})
const [ email, setEmail] = useState('')
const [ password, setPassword] = useState('')

const navigation = useNavigation()

async function handleLoginUser(email,password){
  if(!email || !password){
    alert("Campos Obrigatorios")
  }

  await loginUser(email, password).then(res=>{    
    const newData = res.data
    const newUser = newData.user  
   // console.log(newUser)
    
    if(newUser){
      const newStorage = JSON.stringify(newUser)     
      newLogin(newStorage)   
      navigation.navigate('Home')
    }    
    setEmail('')
    setPassword('')
  }).catch(error=>{
    console.error('Erro ao conectar:', error);
    alert(`Erro ao conectar com servidor`)
  })
}

const loadUserData = async () => {
  try {
    await AsyncStorage.getItem('@season_APP').then(res=>{          
    setUser(res)
    if(res){
      navigation.navigate('Home')
    }
    }).catch(err=>{console.log(err)})        
      
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário:', error);
    }
   
};
  
useEffect(()=>{   
      loadUserData()   
},[user])

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
      secureTextEntry={true}           
      onChangeText={(e)=>setPassword(e)}
      placeholder="Digite seu password"
    />

      <TouchableOpacity style={style.button} onPress={()=>handleLoginUser(email,password)}>
          <Text style={style.buttonText}> Logar </Text>
      </TouchableOpacity>   
    
   
      
      <Text> ------------------ ou ------------------ </Text>
      

      <Text style={style.title}> CRIAR LOGIN? </Text>
    <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('CreateLogin')}>
        <Text style={style.buttonText}>Criar</Text>
    </TouchableOpacity>
    

  </View>
)}


