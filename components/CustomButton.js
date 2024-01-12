import React from 'react';
import { Text, TouchableOpacity, Alert, StyleSheet, View } from 'react-native';

const ButtonPortfolio = (props) => {
  return (
    <TouchableOpacity style={props.btnStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.title}</Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white"
  }
});

export default ButtonPortfolio;
