import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Comp_01(props) {

    return (
        <Text style={estilos.textoCurso} >CFB cursos - curso de {props.curso}: e Nota = {nt} </Text>
    )

}

const estilos = StyleSheet.create({
    textoCurso: {
        color: 'blue',
        fontSize: 15,
    }
})