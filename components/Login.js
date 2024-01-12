import { Text, SafeAreaView, StyleSheet, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

// You can import supported modules from npm
import CustomInput from './CustomInput'
import ButtonPortfolio from './CustomButton'


export default function Login({navigation}) {
  
  const [jumlah, setJumlah] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/login.jpg')}/>
      <Text style={styles.title}>Selamat Datang!</Text>
      <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>
      
      <CustomInput  placeholder="Username"/>
      <CustomInput placeholder="Password"/>
    
      <Text style={styles.title2}>Lupa Password?</Text>
      <ButtonPortfolio title="Masuk" btnStyle= {styles.button} onPress={() => navigation.navigate("Portofolio")}/>   
      <Text style={styles.title4}>Belum punya akun?</Text>
      <Text style={styles.title5}>Daftar sekarang</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'WHITE',
    padding: 150,
    alignItems: 'center',
    marginTop: -105
  },
   avatar: {
    width: 190,
    height: 2,
    marginBottom: -10,
  },
  title: {
    marginLeft:-200, 
    marginTop:15,
    marginBottom:20,
    fontWeight:'bold',
    fontSize:30,
    textAlign:'left',
    marginRight: -80
  },
  subtitle: {
    marginLeft: -184,
    marginRight: -80,
    color: 'grey',
    marginTop: -10,
    fontSize: 15,
  },
  title2: {
    marginTop:1,
    padding:20,
    fontWeight:'semibold',
    fontSize:14,
    textAlign:'right',
    color:'#00A9FF',
    marginRight: -220,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4CE14',
    padding: 10,
    borderRadius: 8,
    width: 320,
    height: 50,
    marginTop: 15,
  },
  title4: {
    marginTop: 40,
    fontWeight: 'medium',
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
    marginLeft: -120,
  },
  title5: {
    marginRight: -120,
    marginTop: -17,
    color: '#00A9FF',
    fontWeight: 'bold'
  }
});
