import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../const/Colors";

type PasswordItemProps = {
    data: string,
    removePassword: () => void;
}

export function PasswordItem({ data, removePassword }: PasswordItemProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View>
            <Pressable onLongPress={removePassword}>
                <Text>
                    {showPassword ? data : '*'.repeat(data.length)}
                </Text>

                <View>
                    <TouchableOpacity>
                        <Feather name="copy" size={22} color={colors.white} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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