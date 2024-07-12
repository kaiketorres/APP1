import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function (props) {

  const [ligado, setLigado] = useState(true)

  const ToogleLigado = () => setLigado(!ligado)

      return (
  <View>
      <Text style={{ color: 'white' }} >Carro {props.carro} Ligado: {ligado ? 'Sim' : 'Nao'}  </Text>
      <Switch value={ligado} onValueChange={ToogleLigado} />
    </View>
  )
}