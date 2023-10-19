import AsyncStorage from '@react-native-async-storage/async-storage';

export const newLogin = async (user) => {
 
  try {      
    await AsyncStorage.setItem( '@season_APP', user ).then(()=> console.log("salvo local: "+ user.name + "Logado" ));
  } catch (error) {
    console.log(error)
  }
};

export async function logOut(){

  try {        
      await AsyncStorage.removeItem(`@season_APP`);
      await AsyncStorage.removeItem('@APP_List');
      return true        
  } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return false        
  }
}