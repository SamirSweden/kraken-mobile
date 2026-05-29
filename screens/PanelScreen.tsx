
import {
    View ,
    Text ,
    Pressable
} from "react-native"

import { useSafeAreaInsets} from "react-native-safe-area-context";

export default function PanelScreen({navigation}: any){
    const insets = useSafeAreaInsets()

    return (
        <View style={{flex:1 ,paddingTop : insets.top}}>
            <Text className={styles.text}>/ panel</Text>
            <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                <Text>go home</Text>
            </Pressable>
        </View>
    )
}


const styles = {
    text : "text-black text-3xl text-center font-bold font-mono uppercase",
}

