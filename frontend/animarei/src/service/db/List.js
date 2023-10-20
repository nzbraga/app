import axios from 'axios';
import { newList } from '../storage/localList';
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseUrl = 'http://localhost:3031'

export async function createList(title, description, user_id, token) {
  try {
    await axios.post(`${baseUrl}/create-list`, {
      headers: { Authorization: `Bearer ${token}`, },
      title: title, description, user_id
    })
  } catch (error) {
    console.error(error);
  }
}

export async function ListsById(id, token) {

  try {
    const lists = await axios.get(`${baseUrl}/lists/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // console.log(lists) 
    const localList = JSON.stringify(lists.data.lists)
    newList(localList);
    return lists;
  } catch (error) {
   // console.error(error);
    alert(`serrvidor off, confirme a conexão com a internet!
se persistir contate a assistencia!`)
    return null;
  }
}
export async function upList(operation, id, description,token) {
  
  const currentDesc = Number(description.split('/')[0].trim())
  const totalDesc = Number(description.split('/')[1].trim())

  if (operation === '+' && currentDesc < totalDesc) {
   
    const newMoreDesc = Number(currentDesc)
    const newDesc = newMoreDesc + 1
    const newDescription = `${newDesc} / ${totalDesc}`       
    
    await axios.patch(`${baseUrl}/update-list/${id}`, {
      description: newDescription
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {     
      console.log("done")
      alert("done")
    })    
  }

  if (operation === '-' && currentDesc > 0) {
    const newMoreDesc = Number(currentDesc)
    const newDesc = newMoreDesc - 1
    const newDescription = `${newDesc} / ${totalDesc}`       
    
    await axios.patch(`${baseUrl}/update-list/${id}`, {
      description: newDescription
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {     
      console.log("done")
      alert("done")
    });    
  }

  if (operation === 'complite'){
    const newDescription = `${totalDesc} / ${totalDesc}`      
    
    await axios.patch(`${baseUrl}/update-list/${id}`, {
      description: newDescription
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {     
      console.log("done")
      alert("done")
    });    
  }

  if (operation === 'reset'){
    const newDescription = `0 / ${totalDesc}`      
    
    await axios.patch(`${baseUrl}/update-list/${id}`, {
      description: newDescription
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {     
      console.log("done")
      alert("done")
    });    
  } 

}
export async function upEdit(id, description, newDesc ,token){
  const totalDesc = Number(description.split('/')[1].trim())
  const newDescription = `${newDesc} / ${totalDesc}`       
    
    await axios.patch(`${baseUrl}/update-list/${id}`, {
      description: newDescription
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {     
      console.log("done")
      alert("done")
    });    
 }

export async function deleteList(id, token) {
  axios.delete(`${baseUrl}/delete-list/${id}`, {
    headers: { Authorization: `Bearer ${token}`, },
  }).then(() => {
    console.log("deleted")
  })
}


export default { createList, ListsById }