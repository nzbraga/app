import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/pages/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer >  
     <Routes />
    </NavigationContainer>
  );
}