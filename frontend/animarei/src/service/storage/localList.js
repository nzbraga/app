import AsyncStorage from '@react-native-async-storage/async-storage';

export const newList = async (list) => {
 
  try {       
    await AsyncStorage.setItem('@APP_List', list ).then(()=>
    {
      //console.log("Lista de Salva")
    }
    );
  } catch (error) {
    console.log(error)
  }
};

export async function delList(){
  try {        
    await AsyncStorage.removeItem('@APP_List');         
  } catch (error) {
     
  }
}