import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fonsize: 30}};

export const Filho = (props) => {
  return (
    <View>
      <Text>
        Filho: {props.nome} {props.sobrenome}
      </Text>
    </View>
  );
};

export const Pai = (props) => {
  return (
    <View>
      <Text>
        Pai:{props.nome} {props.sobrenome}
      </Text>
      {props.children}
    </View>
  );
};

export const Avo = (props) => {

  return (

    <View>
     <Text> Avô: {props.nome} {props.sobrenome}</Text>
      <Pai nome="Andre" sobrenome={props.sobrenome}>
        <Filho nome="Luiz" />
        <Filho nome="Sales" />
        <Filho nome="Hugo" />
      </Pai>
      <Pai {...props} nome="Pedro">
        <Filho nome="Rebeca" />
        <Filho nome="Roberto" />
      </Pai>
    </View>
  );
};

export default Avo;
