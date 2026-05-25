import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
    const getItem = async(key: any) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return passwords ? JSON.parse(passwords) : [];
        } catch (error) {
            console.error(`Erro ao buscar: ${error}`);
            return [];
        }
    }

    const saveItem = async(key: any, value: string) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.error(`Erro ao salvar: ${error}`);
        }
    }

    const removeItem = async(key: any, item: string) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password: string) => {
                return (password !== item);
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            console.error(`Erro ao deletar: ${error}`);
        }
    }

    return { getItem, saveItem, removeItem }
}