import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class EventosComponentes extends Component {
  state = {
    texto: '',
  };

  alterarTexto = (texto) => {
    //apos receber o texto com o paramento da função, utilizando this.setState para setar o texto no estado
    this.setState({texto});
  };

  render() {
    return (
      <View>
        
        <Text style={styles.Fonte}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={styles.input}
          onChangeText={this.alterarTexto} //atualiza em tmepo real quando chama a funçao alterar texto
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  input: {
    height: 70,
    fontSize: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  Fonte: {
    fontSize: 40,
  },
});
