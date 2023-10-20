import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from 'react-native';

import { createUser } from '../../service/db/User'


import { useNavigation } from '@react-navigation/native'
import { style } from "./style";

export default function CreateLogin() {

  const navigation = useNavigation()


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  async function handleCreateUser(name, email, password, passwordConfirm) {

    await createUser(name, email, password, passwordConfirm).then(res => {
      if (res.success) {
        //console.log(res.data.msg)
        const alertMsg = res.data.msg        
        alert(alertMsg)
        
        navigation.navigate('Login')
        
      } else {
        console.error('Erro:', res.error);
        const alertMsg = res.error.error
        //console.log(alertMsg)
        alert(alertMsg)
        
      }
    })
      .catch(error => {
        console.error('Erro:', error);
        const alertMsg = error.error
        alert(alertMsg)
      });
  }
  return (
    <View style={style.container}>

      <Text style={style.title}>Seja bem vindo!</Text>


      <TextInput
        style={style.input}
        value={name}
        onChangeText={(e) => setName(e)}
        placeholder="Digite seu Usuario"
      />

      <TextInput
        style={style.input}
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Digite seu email"
      />

      <TextInput
        style={style.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Digite seu password"
      />

      <TextInput
        style={style.input}
        secureTextEntry={true}
        value={passwordConfirm}
        onChangeText={(e) => setPasswordConfirm(e)}
        placeholder="Digite seu password"
      />

      <Pressable style={style.button} onPress={() => handleCreateUser(name, email, password, passwordConfirm)}>
        <Text style={style.buttonText}>Criar</Text>
      </Pressable>

     
      <Text> ------------------ ou ------------------ </Text>
      
      <Text style={style.title}> JA TEM CADASTRO?</Text>
      <Pressable style={style.button} onPress={() => navigation.navigate("Login")}>
        <Text style={style.buttonText}> Logar </Text>
      </Pressable>

    </View>
  )
}


