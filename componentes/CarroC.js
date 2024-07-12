import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Class extends Component {

  state = {
    ligado: true,
  }

  render() {
    return (
      <View>
        <Text style={{ color: 'white' }} >
          Carro {this.props.nome} - Ligado: {this.state.ligado ? 'Sim' : 'Nao'}
        </Text>
        <Button title={this.state.ligado ? 'Desligar' : 'Ligar'}
          onPress={
            () => { this.setState({ ligado: !this.state.ligado }) }
          }
        />

      </View>
    )
  }
}