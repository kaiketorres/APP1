import React, {useState} from "react";
import { View, Switch } from "react-native";


export default function(){

  const [ligado,setligado] = useState(false)

  const alterar = () => setligado(!ligado)
 
  return(
    <View>
      <Switch  value={ligado} onValueChange={alterar}   />
    </View>
  )
}