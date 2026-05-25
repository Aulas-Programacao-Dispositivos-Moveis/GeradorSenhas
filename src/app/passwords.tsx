import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PasswordItem } from "../components/PasswordItem";
import { colors } from "../const/Colors";
import useStorage from "../hooks/useStorage";

export default function TabScreenPasswords() {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item: any) {
        const passwords = await removeItem('@pass', item);
        setListPasswords(passwords);
    }

    return (
        <SafeAreaView
            style={estilo.content}
        >
            <Text style={estilo.headerText}>Senhas</Text>
            <FlatList
                style={{ flex: 1, paddingTop: 14, }}
                data={listPasswords}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
            />
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        paddingRight: 14,
        paddingLeft: 14,
        backgroundColor: colors.gray
    },
    headerText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: colors.blue,
        margin: 15
    }
});