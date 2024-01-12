import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

import React, { useState } from 'react';

import CustomButton from '../components/CustomButton';

const Portofolio = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likes = () => {
    setLike(like + 1);
  };

  const dislikes = () => {
    setDislike(dislike + 1);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/lala.jpeg')} />
      <Text style={styles.title}>Syahla Kheisya M</Text>
      <Text style={styles.subtitle}>
        Halo nama saya Syahla Kheisya Mayastria lahir di Banyumas, 14 Maret 2006 sekarang saya bersekolah di <Text style={{fontWeight:'bol'}}>SMK Telkom Purwokerto</Text> Jurusan Rekayasa Perangkat Lunak
      </Text>

      <CustomButton title="Contact Me" />

      <Text style={styles.title2}>My Project</Text>
      <Image
        style={styles.avatar2}
        source={require('../assets/login.jpg')} />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => Alert.alert('annyeonghaseo')}>
        <Text style={styles.text2}>Check This Out!</Text>
      </TouchableOpacity>
      <Text style={styles.title3}>ProjectKu</Text> 
      <Text style={styles.subtitle2}>ProjectKu2</Text>
      <Text
          style={{
            color: '#49417E',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 22,
          }}>
          Bagaimana Dengan Portofolioku?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 34,
            marginTop: 12,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 22,
            }}>
            <Text style={styles.textReact}>👍 {like}</Text>
            <TouchableOpacity onPress={likes} style={styles.btnLike}>
              <Text>Like</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textReact}>👎 {dislike}</Text>
            <TouchableOpacity onPress={dislikes} style={styles.btnDislike}>
              <Text>Dislike</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#89CFF3',
    padding: 35,
  },
  avatar: {
    width: 190,
    height: 200,
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderColor: 'red'
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 7,
    fontSize: 13,
    fontWeight: 'medium',
    fontFamily: 'montserrat',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 20,
    color: 'black',
    fontFamily: 'montserrat',
  },
  avatar2: {
    width: 335,
    height: 200,
    marginTop: 10,
    borderRadius: 3,
  },
  title3: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    marginRight: 165,
    fontWeight: 'bold',
    marginTop: -45,
    marginLeft: -90,
  },
  subtitle2: {
    fontWeight: 'medium',
    fontSize: 15,
    color: 'grey',
    marginRight: 211,
    marginLeft: -49,
  },
    text2: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
    marginTop: 3,
    color: 'white',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#192655',
    padding: 11,
    borderRadius: 4,
    width: 150,
    height: 45,
    marginTop: 12,
    marginLeft: 185,
  },
  btnLike: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: '#F875AA',
    borderWidth: 1,
  },
  btnDislike: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  textReact: {
    fontSize: 23,
    padding: 6,
    marginVertical: 6,
  },
});

export default Portofolio;