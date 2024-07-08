import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles/styles";
import Caixas from "./componentes/caixas";
import FL from "./componentes/flastList";

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Text>
        <FL />
      </Text>
      <Text>youtube.com/cfbcursos</Text>
      <Text>cfbcusos.com.br</Text>
    </View>
  );
}
