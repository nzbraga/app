import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'

import styles from "./style";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListsById, upList,upEdit, deleteList } from "../../service/db/List";

const Favorite = () => {


  const navigation = useNavigation()

  const [user, setUser] = useState({});
  const [lists, setLists] = useState({});
  
  
  async function loadUserData(){
    try {
      const userData = await AsyncStorage.getItem('@season_APP');
      if (userData) {
        const newUser = JSON.parse(userData);
        setUser(newUser);
      }
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };  
  async function loadListData(){
    const listData = await AsyncStorage.getItem('@APP_List')
    const newListData = JSON.parse(listData)
    try {
      if (user.id) {
        await ListsById(user.id, user.token).then(res => {
          if (res === null) {
            // console.log(newListData)
            setLists(newListData)
          } else {
            setLists(res.data.lists);
          }
        })
      } else {

      }
    } catch (error) {
      console.error('Erro ao carregar a lista de dados:', error);
    }
  };
  const handleUpList = (operation, id, description, token) => {    
    upList(operation, id, description, token).then(() => {
      navigation.replace('Favorites')
    })
  }
  function handleDescEdit( id, description, token) {
   
    const totalDesc = Number(description.split('/')[1].trim())
    const newEdit = prompt('Editar episodios vistos:', '')
    if(newEdit){     
    upEdit(id, description, newEdit, token).then(() => {
      navigation.replace('Favorites')
    })
    }
  }
  
  useEffect(() => {
    if (!user.id) {
      loadUserData();
    }
    loadListData();

  }, [user]);
  //console.log(lists)
  return (
    <View style={styles.container}>
        {!lists ? <>'Adicione um anime e ele aparecera aqui' </>: 
        
      <FlatList
      data={lists}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        const titleSlash = item.title.split(' ~ ')[0];

        return (
          <View style={styles.listItemContainer}>
            <Text style={styles.titleText}>
              {titleSlash.length > 30
                ? titleSlash.substring(0, 30) + '...'
                : titleSlash}
            </Text>
            <Text style={styles.episodeText}>Episodes: {item.description}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}
                onPress={() => { handleUpList('+', item.id, item.description, user.token) }}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
              <Pressable style={styles.button}
                onPress={() => { handleUpList('-', item.id, item.description, user.token) }}
              >
                <Text style={styles.buttonText}>-</Text>
              </Pressable>

              <Pressable style={styles.button}
                onPress={() => { handleDescEdit('edit', item.id, item.description, user.token) }}
              >
                <Text style={styles.buttonText}>✎</Text>
              </Pressable>

              <Pressable style={styles.button}
                onPress={() => { handleUpList('complite', item.id, item.description, user.token) }}
              >
                <Text style={styles.buttonText}>🗹</Text>
              </Pressable>
              <Pressable style={styles.button}
                onPress={() => { handleUpList('reset', item.id, item.description, user.token) }}
              >
                <Text style={styles.buttonText}>☐</Text>
              </Pressable>

              <Pressable style={styles.button}
                onPress={() => { deleteList(item.id, user.token) }}
              >
                <Text style={styles.buttonText}>X</Text>
              </Pressable>
            </View>             
          </View>
        );
      }}
    />
        }
  
  
    </View>
  )
}

export default Favorite;
