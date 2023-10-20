import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./style";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


import { createList } from "../../../service/db/List";
import Favorite from "../../Favorite";


function ApiList({ data }) {

  const navigation = useNavigation()
  
  const [user, setUser] = useState({})
  const [favList, setFavList] = useState({})
  const [isLoading, setIsLoading] = useState(false)


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

  function handleAnimeFav(title, description,user_id, token){
    const newTitle = title + ' ~ ' + user_id
    const newDesc = '0' + ' / ' + description
    createList(newTitle, newDesc,user_id, token).then(()=>{
      alert('Salvo!')
    })
    navigation.navigate(Favorite)

  }

  
  const renderItem = ({ item }) => (
    <>
  
    <View style={styles.itemContainer}>

      <View style={styles.imageContainer}>       
      <Image source={{ uri: item.images.jpg.large_image_url }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {item.title.length > 18
            ? item.title.substring(0, 18) + '...' 
            : item.title
          }

        </Text>

        <Text style={styles.synopsisText}>

          {item.synopsis && item.synopsis.length > 15
            ? item.synopsis.substring(0, 55) + '...' 
            : item.synopsis
          }
        </Text>

        {item.episodes > 1 ?
          <>
            <Text style={styles.episodeText}>Episodes: {item.episodes}</Text>
          </>
          :
          <>
            <Text> OVA / Filme </Text>
          </>}

        <TouchableOpacity onPress={() => handleAnimeFav(item.title,item.episodes,user.id,user.token)} style={styles.starContainer}>
          <Text style={styles.starIcon}>🤍</Text>
        </TouchableOpacity>

      </View>


    </View>

    </>
  );  
  return (
    <>
      {isLoading ? <ActivityIndicator/>:
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.mal_id.toString()}
      />
      </View>
    }
    </>
      );
}

export default ApiList;
