import React, { useState } from "react";
import { View, Text, StatusBar, Button } from "react-native";

export default function () {

  const [bar, setBar] = useState('blue')

  const mudaCor = (c) => setBar(c)


  return (
    <View  >
      <StatusBar backgroundColor={bar} />
      <Button title="Vermelho" color={'red'} onPress={() => {mudaCor('red')}} />
      <Button title="blue" color={'blue'} onPress={() => {mudaCor('blue')}} />
      <Button title="green" color={'green'} onPress={() =>{mudaCor('green')}} />

    </View>
  );
}
