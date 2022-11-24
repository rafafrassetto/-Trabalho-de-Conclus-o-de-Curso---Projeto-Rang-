import React, { useState } from 'react'
import { Button, Image } from "react-native";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import fundo from '../assets/LOGOCOMPESSOAS.png'
import config from "../config/config.json";

export default function Inscreva({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');


async function registerUser()
{
  let request = await fetch('http://localhost:3000/create',{
    method: 'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      nome: nome,
      email: email,
      senha: senha
    })
  });
  let ress = await request.json();
  setMessage(ress);

}


  return (
    <View style={styles.container}>

    { <Text style={{ color: 'black' }}>{message}</Text> }

    
      <View style={styles.imagem}>
        <Image
          style={styles.fundo}
          source={fundo}>
        </Image>
      </View>

      

      <View style={styles.direction}>
        <TextInput
          onChangeText={(text) => setNome(text)}
          placeholder='Nome'
          style={styles.input}
        />


        <TextInput style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor="gray" />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder='Email' />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="gray" />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          placeholder='Senha' />


      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>registerUser()}>
        <Text style={styles.inscrevase}>Inscreva-se</Text>
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