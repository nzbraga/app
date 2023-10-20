import axios from 'axios';

const baseUrl = 'http://localhost:3031'  

export async function createUser(name,email,password,confirmPassword){
    try {
        const response = await axios.post(`${baseUrl}/create-user`, {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        });
        //console.log(response.data);
    
        const result = { success: true, data: response.data };
        return result;
      } catch (error) {
        //console.error(error.response.data.error);
    
        const result = { success: false, error: error.response.data.error };
        throw result;
      }
}
export async function loginUser(email,password){ 
  try {
    const res = await axios.post(`${baseUrl}/login-user`,
    {      
    email: email, password: password
    })
    const newData = res.data
   
    const result = { success: true, data: newData };
    return result;
    
  } catch (error) {    
    //console.log(error.response.data.error)
    alert(error.response.data.error)
    const result = { success: false };
    return result;
  }   
    
}
export async function usersById(id,token){   

  try {    
    const user = await axios.get(`${baseUrl}/get-user/${id}`, {
      headers: { Authorization: `Bearer ${token}`,},
    });    
    const userData = user.data;
    //console.log(userData)
    return userData;
    
  } catch (error) {
      console.log(error)
  }    
    
}

export function listUsers(){    
    axios.get(`${baseUrl}/list-users`).then(res=>{
        console.log(res)        
    }).catch(err=>{
        console.error(err)
    })   
    
}




export default {createUser, loginUser}