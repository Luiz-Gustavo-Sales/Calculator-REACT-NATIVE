import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Buttton from '../../../Components/Buttom/index';
import Display from '../../Display/index';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  //clone do objeto initialState
  state = {...initialState};

  addDigit = (n) => {
    console.debug(typeof this.state.displayValue);
    //verificando se dentro do dispaly já tiver um ponto , retonara nada caso contrario ele adiciona o ponto

    //vai testar o clearDisplay, se ele for igual false vai receber o falo do clearDisplay(false)
    const clearDisplay =
      this.state.displayValue == '0' || this.state.clearDisplay;
    if (n == '.' &&!clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  removeDigt = (n) => {
    this.setState({...initialState});
  };

  setOperation = (operation) => {
    if (this.state.current == 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation == '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Buttton label="AC" triplee onClick={this.removeDigt} />
          <Buttton label="/" onClick={() => this.setOperation('/')} />
          <Buttton label="7" onClick={this.addDigit} />
          <Buttton label="8" onClick={this.addDigit} />
          <Buttton label="9" onClick={this.addDigit} />
          <Buttton label="*" operation onClick={this.setOperation} />
          <Buttton label="4" onClick={this.addDigit} />
          <Buttton label="5" onClick={this.addDigit} />
          <Buttton label="6" onClick={this.addDigit} />
          <Buttton label="-" operation onClick={this.setOperation} />
          <Buttton label="1" onClick={this.addDigit} />
          <Buttton label="2" onClick={this.addDigit} />
          <Buttton label="3" onClick={this.addDigit} />
          <Buttton label="+" operation onClick={this.setOperation} />
          <Buttton label="0" double onClick={this.addDigit} />
          <Buttton label="." onClick={this.addDigit} />
          <Buttton label="=" operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
});
