import { View, Text } from "react-native";

export default function SplashScreen() {
    return (
        <View className="flex-1 items-center justify-center flex-col gap-5 bg-black">
            <Text className="text-white text-2xl font-bold">
                Ryan &mdash;
            </Text>

            <Text className="text-white animate-pulse text-3xl mt-2 ">
                Kraken.su
            </Text>
        </View>
    );
}