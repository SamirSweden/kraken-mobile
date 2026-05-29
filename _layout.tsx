//@ts-nocheck

import 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer";


import HomeScreen from "./screens/HomeScreen";
import PanelScreen from "./screens/PanelScreen";

const Drawer = createDrawerNavigator()

export default function Layout() {


    return (
            <Drawer.Navigator>
                <Drawer.Screen
                    initialRouteName={"HomeScreen"}
                    name={"HomeScreen"}
                    component={HomeScreen}
                />

                <Drawer.Screen
                    name={"PanelScreen"}
                    component={PanelScreen}
                />
            </Drawer.Navigator>
    )
}


