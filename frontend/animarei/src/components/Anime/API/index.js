import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import style from "./style";


import AnimeList from "../AnimeList";
import api from "./api";


function API() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    if (search === '') {
      alert('insira o nome de um anime')
    }
    getData();
  };

  const getData = async () => {
    setIsLoading(true)
    if (search) {
      const res = await fetch(`${api}${search}`);
      const { data } = await res.json();
      setData(data);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);


  return (

    <View>

      <View style={style.container}>
        <View style={style.textContainer}>
          <TextInput style={style.textInput}
            value={search}
            onChangeText={(v) => setSearch(v)}
            placeholder='Buscar por Anime'
          />
          <Pressable style={style.button}
            onPress={() => handleSearch()}>
            <Text style={style.buttonText}>Buscar</Text>
          </Pressable>

        </View>

      </View>
    {search === '' ? <Text style={{textAlign:"center"}}>Busque por um anime e ele aparecera aqui!</Text>
    :<Text style={{textAlign:"center"}}>Você pode adicionar Animes aos Favoritos,<br></br> é so clicar no 🤍</Text>}
      <View style={style.loading}>
        {isLoading ? <ActivityIndicator size="large" color="green" /> :
          <AnimeList
            search={search}
            data={data}
            navigation={navigation}
          />
        }
      </View>
    </View>
  )
}

export default API;