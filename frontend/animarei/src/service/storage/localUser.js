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



export async function logOut(){

  try {        
      await AsyncStorage.removeItem(`@season_APP`);
      return true        
  } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return false        
  }
}