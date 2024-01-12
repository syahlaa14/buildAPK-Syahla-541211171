import { Text, SafeAreaView, StyleSheet, View, Image, Button, TextInput } from 'react-native';



const CustomInput = (props) => {
  return (
    
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={props.value}
        placeholder = {props.placeholder}
      />

  );
}

const styles = StyleSheet.create({
  
  input: {
    borderWidth: 2,
    margin: -20,
    marginTop: 30,
    textAlign: 'left',
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  }
  
});

export default CustomInput;