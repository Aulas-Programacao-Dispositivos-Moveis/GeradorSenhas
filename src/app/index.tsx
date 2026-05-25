import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../const/Colors";

export default function Index() {
  const [ passwordLength, setPasswordLength ] = useState(8);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={styles.icone}
      />
      <Text
        style={styles.texto}
      >{passwordLength} caracteres</Text>

      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={8}
        maximumValue={24}
        step={1}
        onValueChange={setPasswordLength}
        value={passwordLength}
        minimumTrackTintColor={colors.blue}
        maximumTrackTintColor="#000000"
        thumbTintColor={colors.blue}
        thumbSize={16}
      />

      <TouchableOpacity 
        style={ styles.botao }
        onPress={() => alert(`Passwd len. ${passwordLength}`)}  
      >
        <Text style={ styles.textoBotao }>Gerar Senha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icone: {
    width: 250,
    height: 250,
    marginBottom: 40
  },
  texto: {
    fontSize: 20
  },
  botao: {
    width: 250,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.blue
  },
  textoBotao: {
    color: "white",
    textAlign: "center"
  }
});