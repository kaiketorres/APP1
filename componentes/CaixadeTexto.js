import React,{useState} from "react";
import { View, Text, TextInput } from "react-native";

export default function(){

 let [nome,setNome] = useState('')
 let mudarNome = (text) => setNome(text)

  return(
    <View>
      <Text style={{color:'white'}}  >Digite seu nome:</Text>
      <TextInput value={nome}  onChangeText={mudarNome}   style={{borderWidth:1,borderColor:'white'}}/>
      <Text>Valor Digitado {nome}</Text>
    </View>i
  ) 
}