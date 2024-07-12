import React from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text>CBF Cursos</Text>
      <Text >Curso de Reactr native</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white'
  }
})
