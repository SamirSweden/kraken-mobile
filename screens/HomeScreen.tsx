import {
    Pressable,
    Text,
    View
} from "react-native";

import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const insets = useSafeAreaInsets()
    const navigation: any = useNavigation()

    return (
        <View style={{flex: 1,paddingTop: insets.top}}>
            <Pressable onPress={() => navigation.navigate('Panel')}>
                <Text>
                    / home
                </Text>
            </Pressable>
        </View>
    )
}
