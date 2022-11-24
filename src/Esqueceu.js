import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import logo from '../assets/Logo.png'


export default function Esqueceu({ navigation }) {

 

  return (
    <View style={styles.container}>
      <Image
        style={styles.meuCafe}
        source={logo}
      />
      <View style={styles.legenda}>
          <Text style={styles.legendaL}>Será enviado um email para recuperação de senha</Text>
        </View>
     <View style={styles.blck1}>
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          backgroundColor="#4B0000"/>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate
          (console.log("sadjashdjksakdas"))}>
        <Text style={styles.inscrevase}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4B0000',
    justifyContent: 'center',
  },
  meuCafe: {
    height: 150,
    width: 150,
    marginBottom:'10%',
  },
  input: {

    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: "white"
  },
  blck1: {
    fontFamily: 'Montserrat',
    marginBottom: 100,
    alignItems: 'flex-start',
  },
  button: {
    color: "#4B0000",
    width: '10',
    height: '10',
    alignContent: "center",


  },
  inscrevase: {
    alignItems: "center",
    color: "white",
  },
  legenda:{
      color:'white',
      marginBottom:'10%'

  },
  legendaL:{
      color:'white'
  }
});

