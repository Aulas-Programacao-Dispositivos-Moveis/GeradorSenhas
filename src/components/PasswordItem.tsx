import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { setStringAsync } from "expo-clipboard";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { colors } from "../const/Colors";

type PasswordItemProps = {
    data: string,
    removePassword: () => void;
}

export function PasswordItem({ data, removePassword }: PasswordItemProps) {
    const [showPassword, setShowPassword] = useState(false);

    const copyToClipboard = async () => {
        await setStringAsync(data);
        // alert("Senha copiada!");
        Toast.show({
            type: "success",
            text1: "Senha copiada!",
            visibilityTime: 2000,
        });
    }

    return (
        <View>
            <Pressable onLongPress={removePassword} style={estilo.container}>
                <Text style={estilo.text}>
                    {showPassword ? data : '*'.repeat(data.length)}
                </Text>

                <View style={estilo.actions}>
                    <TouchableOpacity onPress={copyToClipboard} style={estilo.iconButton}>
                        <Feather name="copy" size={22} color={colors.white} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={estilo.iconButton}>
                        <MaterialCommunityIcons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 8,
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        paddingLeft: 8
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    iconButton: {
        padding: 4
    }
})