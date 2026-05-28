import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import PanelScreen from "./screens/PanelScreen";



const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <SafeAreaProvider>
      {/*<ScreenContent title="Kraken.su" path="App.tsx"></ScreenContent>*/}
      {/*<StatusBar style="auto" />*/}

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="Panel"
                    component={PanelScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
