import React,{Component} from 'react';
import {View, Text, TouchableHighlight,Button, Alert} from 'react-native';


export default class Contador extends Component {


  state = {
    numero: 3,
  };
  //função NAO é EROfunction
  //dependnedo de quem chama varia o this. Mas não usando EroFunction deve usar, 
  //dependendoo de quem chama a erofuncion na chamada


  //========Na chamada dessa function deve usar no botton um erofunction pra chama o This===========
  maisum(){
    return(
    this.setState({numero: this.state.numero + 1})
    );
  };
  //função EROFUNCTION
  limpar = () => {
    this.setState({numero: 0});
  };

  render() {
    return (
      <View>
        <Text>{this.state.numero}</Text>
        <Button onPress={() => {this.maisum()}}
        title="Somar"
        />
    <Button onPress={this.limpar}
    title="Limpar"
    />
       
      </View>
    );
  }
}
