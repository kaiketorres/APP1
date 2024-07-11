import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function App() {

  return (

    <View style={estilos.conteiner}>
      <Text style={estilos.texto}>CBF Cursos</Text>
      <Text style={estilos.texto} >Curso de Reactr native</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#43dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'white'
  }
})
