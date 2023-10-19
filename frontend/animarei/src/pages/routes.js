import  React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home";
import Favorites from "./Favorites";
import Login from "./Login";
import CreateLogin from "./CreateLogin"

const Stack = createStackNavigator();

function Routes(){   
 
    return(
        <Stack.Navigator >
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />    
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='Favorites' component={Favorites} options={{headerShown:false}} />    
            <Stack.Screen name='CreateLogin' component={CreateLogin} options={{headerShown:false}} />                     
        </Stack.Navigator>
    )
}

export default Routes;