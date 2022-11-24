import React, { useState } from 'react'
import { Button, Image } from "react-native";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';


export default function Localizacao({ navigation }) {



  return (
    <View style={styles.container}>

      <View style={styles.direction}>
        <TextInput
          placeholder='Rua'
          style={styles.input}
        />


        <TextInput style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="gray" />

        <TextInput
          style={styles.input}
          placeholder='Cep' />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="gray" />

        <TextInput
          style={styles.input}
          placeholder='Senha' />

          <TextInput
          style={styles.input}
          placeholder='Número da casa' />

         <TextInput
          style={styles.input}
          placeholder='Complemento' />


      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FinalizarPedido')}>
        <Text style={styles.inscrevase}>Enviar </Text>
      </TouchableOpacity>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  direction: {
    alignItems: 'center',
    top: '-3%'

  },
  imagem: {
    top: '5%',
    alignItems: "flex-end",

  },
  fundo: {
    height: 200,
    width: 150,
    marginRight: 25

  },
  input: {
    margin: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    color: 'gray'
  },
  inscrevase: {
    alignItems: "center",
    color: "white",
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold.ttf'
  },
  button: {
    backgroundColor: "#4B0000",
    top: '-2%',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 90,
    height: 25



  },

});