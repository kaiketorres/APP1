import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";

export default function App() {
  const [cont, setCont] = useState(0);

  const incrementar = () => setCont(cont + 1);
  const resetar = () => setCont(0);

  return (
    <View style={estilos.container}>
      
      <TouchableHighlight underlayColor={'#38fd'} onPress={incrementar} style={estilos.botao}>
        <Text style={{color:'white'}} >Conte</Text>
      </TouchableHighlight>
      <TouchableOpacity  onPress={resetar} style={estilos.botao}>
        <Text style={{color:'white'}} >Resetar</Text>
      </TouchableOpacity>
      
      <Text style={estilos.texto}>
        {cont >= 10 ? "Ganhou" : cont }
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#0765',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 24,
    color: 'black',
  },
});
