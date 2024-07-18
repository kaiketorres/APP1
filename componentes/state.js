import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function () {

  const [ligado, setLigado] = useState(false)

  return (
    <View style={estilos.main} >
      {ligado ?
        <View>
          <Text style={estilos.texto}>CBF Cursos</Text>
          <Text style={estilos.texto}>Curso de Reactr native</Text>
        </View>
        :
        <Text></Text>
      }
      <Button title={ligado ? 'Esconder Texto' : 'Ver Texto'} onPress={() => setLigado(!ligado)} />
    </View>
  )
}


const estilos = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 10
  },
  texto: {
    textAlign: 'center',
    color: 'white'
  }

})