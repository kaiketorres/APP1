import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Guias = createDrawerNavigator()

function Telahome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Tela home</Text>
      <Text>CFB Cursos</Text>
    </View>
  )
}

function Telacanal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Canal</Text>
      <Text>https://www.youtube.com/watch?v=nf7nSjDVJs8&list=PLx4x_zx8csUgyDN7j9L7gykBjxByM_etD&index=25</Text>
    </View>
  )
}


function TelaCursos({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela curso</Text>
    </View>
  )
}

function TelaReactNative({ route, navigation }) {

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> 4 </Text>
    </View>
  )
}

export default function App({navigation}) {
  return (

    <NavigationContainer style={styles.container}>
      <Guias.Navigator >
        <Guias.Screen
          name='Home'
          component={Telahome}
          options={
            {
              title: 'Tela Inicial',
              headerStyle: {
                backgroundColor: 'blue'
              }, headerTintColor: 'white'
            }} />
        <Guias.Screen
          name='Canal'
          component={Telacanal}
          options={{
            title: 'Tela Canal',
            headerStyle: {
              backgroundColor: 'blue'
            }, headerTitleStyle: {
              fontWeight: 'bold',
              color:'white'
            }, headerRight:() => (
                <Button  title="Cursos" color='black' onPress={() => alert('Botao Cursos clicado')}     />
                
              ),
          
          }
          }
        />
        <Guias.Screen
          name='TelaCursos'
          component={TelaCursos}
          options={{ title: 'Cursos do canal' }} />
        <Guias.Screen
          name="CursoReactNative"
          component={TelaReactNative}
          options={{ title: 'Curso de React native' }}
        />
      </Guias.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7608'
  },
  texto: {
    color: 'white'
  }
});
