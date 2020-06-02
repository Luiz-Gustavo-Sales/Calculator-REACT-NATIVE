import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Login = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>PAG LOGIN</Text>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
