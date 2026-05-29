import {
    Pressable,
    Text,
    View,
    Image
} from "react-native";

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const insets = useSafeAreaInsets()
    const navigation: any = useNavigation()

    return (
        <View style={{flex: 1,paddingTop: insets.top}} className={'bg-black'}>
            <View className={`max-w-4xl mx-auto px-4 w-full h-full`}>
                <View className={`flex items-center justify-between`}>
                    <Pressable
                        onPress={() => navigation.navigate("HomeScreen")}>
                        <Text className={'text-3xl text-violet-600 font-bold font-mono'}>
                            Kraken.su
                        </Text>
                    </Pressable>
                    <View className={'flex items-center gap-2 bg-[#111] rounded-3xl py-3 px-3 '}>
                        <Pressable onPress={() => navigation.navigate("PanelScreen")}
                                   className={'text-white outline-none border-none'}>
                            <Text className={'text-lg text-white font-bold font-mono'}>
                                Panel
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("PanelScreen")}
                                   className={'text-white outline-none border-none'}>
                            <Text className={'text-lg text-white font-bold font-mono'}>
                                Coins
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
