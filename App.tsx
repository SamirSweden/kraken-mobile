import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./SplashScreen";
import {useState , useEffect} from "react";


const Stack = createNativeStackNavigator();

function Root(){
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        },2000)

        return () => clearInterval(timer)
    },[])

    if(loading) return <SplashScreen />

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}


export default function App() {
  return (
    <NavigationContainer>
        <Root />
    </NavigationContainer>
  );
}
