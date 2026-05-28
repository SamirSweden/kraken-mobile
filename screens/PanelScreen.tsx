
import {
    View ,
    Text ,
    Pressable
} from "react-native"

import {SafeAreaView} from "react-native-safe-area-context";

export default function PanelScreen({navigation}: any){
    return (
        <SafeAreaView>
            <View>
                <Text className={styles.text}>/ panel</Text>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Text>go home</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}


const styles = {
    text : "text-black text-3xl text-center font-bold font-mono uppercase",
}

