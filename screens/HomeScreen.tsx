import {
    Pressable,
    Text,
    View
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation: any = useNavigation()

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Pressable onPress={() => navigation.navigate('Panel')}>
                    <Text>
                        / home
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
