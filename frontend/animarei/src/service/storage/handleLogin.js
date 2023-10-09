import {  useState } from 'react'
import { usersById } from '../../service/db/User'


import AsyncStorage from '@react-native-async-storage/async-storage';


export async function logOut(){

    try {        
        await AsyncStorage.removeItem(`@season_APP`);
        return true        
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        return false        
    }
}

export async function loadUserData(){

    const [user, setUser] = useState({})
    const [userId, setUserId] = useState('')
    const [tokenId, setTokenId] = useState('')

    console.log('1')
    try {
        console.log('2')
        const userData = await AsyncStorage.getItem('@season_APP')
        console.log('2')
        const data = JSON.parse(userData)
        const id = data.id
        const token = data.token
        console.log(data)
        setUser(data)
        setUserId(id)
        setTokenId(token)
        console.log('3')

        await usersById(id, token).then((data) => {
            console.log('4')
            const dataId = data.user
            setUser(dataId)
            console.log(dataId)
            console.log('5')
        }).catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
    }
    console.log('6')

};
