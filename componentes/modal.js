import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

export default function () {

const [modal,setModal] = useState(false)

const verModal = () => setModal(!modal)

  return (
    <View >
     <Modal  transparent={true}  visible={modal} animationType="slide" > 
      <View >
        <View style={estilos.modal} >
          <Text style={estilos.Textmodal}>CFB Curso</Text>
          <Text style={estilos.Textmodal}>Curso de React Native</Text>
          <Button title="Fechar"onPress={() => setModal(false)}/>
        </View>
      </View> 
      </Modal>
      <Button title="Mostra Modal" onPress={verModal}/>
    </View>
  )
}

const estilos = StyleSheet.create({
  modal:{
    margin:10,
    borderRadius:10,
    padding:30,
    backgroundColor:'black',
  },  
  Textmodal:{
    color:'white'
  }
})

