import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

// import { Container } from './styles';

const Buttom = (props) => {
  const  stylebotton=[styles.buttom]
if(props.double) stylebotton.push(styles.buttonDouble)
if(props.triplee) stylebotton.push(styles.buttonTriple)
if(props.operation) stylebotton.push(styles.operationButton)
  return (

    <TouchableHighlight onPress={()=>props.onClick(props.label)}>
      <Text style={stylebotton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

export default Buttom;

const styles = StyleSheet.create({
  buttom: {
    fontSize: 45,
    height: (Dimensions.get('window').width / 4),
    width: (Dimensions.get('window').width / 4),
    padding: 15,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4)*3,
  },
});
