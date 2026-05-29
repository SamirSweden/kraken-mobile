
import './global.css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./SplashScreen";
import {useState , useEffect} from "react";
import PanelScreen from "./screens/PanelScreen";

//const Drawer = createDrawerNavigator()
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
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="PanelScreen"
                    component={PanelScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default function App() {
  return (
        <Root />
  );
}
