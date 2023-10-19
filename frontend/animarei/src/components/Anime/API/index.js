import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";



import SearchBar from "../SearchBar";
import AnimeList from "../AnimeList";
import api from "./api";




function API({ route }) {

  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [data, setData] = useState({}); 

 

  const handleSearch = () => {
    getData();
  };

  const getData = async () => {

    if (search) {
      const res = await fetch(`${api}${search}`);
      const { data } = await res.json();
      setData(data);
    
    }
  };

  useEffect(() => {
    if (route) {
      setSearch(searchCurrent);
    }
    getData();
  }, []);


  return (

  <View  >

    <SearchBar
     search={search}
     onSearchChange={setSearch}
     onSearchSubmit={handleSearch}
    />  
   
    <AnimeList
    search={search}
    data={data}
    navigation={navigation}
    />   


  </View>
  )
}

export default API;