import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../const/Colors";

export default function Storage() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.gray
            }}
        >
            <Text>Senhas salvas</Text>
        </SafeAreaView>
    );
}