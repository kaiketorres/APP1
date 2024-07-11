import React from "react";
import { View, Text, Button, Alert } from "react-native";

export default function(){
 
  let soma = 1 + 1 

 const alert = () => Alert.alert(`Soma total`,`${soma}`)

  return(
    <View>
      <Button  title="Alert" onPress={alert}/>
    </View>
  )
}
