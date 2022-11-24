import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import logo from '../assets/Logo.png'


export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');


  async function Login() {
    let response = await fetch('http://localhost:3000/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    });
    const json = await response.json()
    if (json == 'error'){
      setMessage('USUARIO OU SENHA INVALIDOS')
      setTimeout(() =>{
        setMessage('')
      },3000)
    }else{
      navigation.navigate('Home')
    }

  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.meuCafe}
        source={logo}
      />
      <View style={styles.blck1}>
        <TextInput style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor="white"
          backgroundColor="#4B0000"

        />

        <TextInput secureTextEntry={true} style={styles.input}
          placeholder="Senha"
          onChangeText={text => setSenha(text)}
          placeholderTextColor="white"
          color='white' />


        <TouchableOpacity style={styles.buttonesqueceu}
          onPress={() => navigation.navigate
            ('')} >
          <Text style={styles.esqueceu}>Esqueceu a senha ?</Text>
        </TouchableOpacity>

      </View>


      <TouchableOpacity style={styles.buttonentrar}
        onPress={Login}>
        <Text style={styles.entrar}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate
          ('Inscreva')} on>
        <Text style={styles.inscrevase}>Inscreva-se</Text>
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
    marginBottom: 80
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

  esqueceu: {
    marginTop: 25,
    color: "white",
    fontSize: 8,
    alignItems: "center",


  },
  buttonesqueceu: {
    marginLeft: 50,
  },
  button: {
    color: "#4B0000",
    width: '10',
    height: '10',
    alignContent: "center"


  },
  inscrevase: {
    alignItems: "center",
    color: "white",
  },
  buttonentrar: {
    color: "black",
    marginBottom: 10

  },
  entrar: {
    color: "white",

  }
});

