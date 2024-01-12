import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Login from './components/Login'
import Register from './components/Register'
import Portofolio from './components/Portofolio'


export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Portofolio" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name="Register" component={Register}/> 
        <Stack.Screen name="Portofolio" component={Portofolio}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


