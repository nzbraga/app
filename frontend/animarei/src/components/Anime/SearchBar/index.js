import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import styles from './style'

function SearchBar({ search, onSearchChange, onSearchSubmit }) {
  return (

    <View style={styles.container}>
      <View style={styles.textContainer}>
        
        <TextInput style={styles.textInput}
          value={search}
          onChangeText={onSearchChange}
          placeholder="Buscar por Anime"
          onSubmitEditing={onSearchSubmit}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onSearchSubmit}
        >
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}

export default SearchBar;
