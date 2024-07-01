import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App1() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>CFB cursos</Text>
//         <Text>Curso de react native</Text>
//       </View>
//       <View>
//         <Text>Aula 3</Text>
//         <Text>www.cfbcursos.com.br</Text>
//       </View>
//     </View>
//   )
// }

export default class App1 extends Component{
  render(){
    return(
      <View>
        <Text>CFB cursos</Text>
         <Text>Curso de react native</Text>
       </View>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
