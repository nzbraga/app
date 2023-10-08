import AsyncStorage from '@react-native-async-storage/async-storage';

export const newLogin = async (userId,token) => {
 
  try {
    await AsyncStorage.setItem(
      userId,
      token,
    ).then(()=> console.log("salvo local"));
  } catch (error) {
    console.log(error)
  }
};