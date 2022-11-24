import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, } from 'react-native';

import Home from './src/Home';
import Login from './src/Login';
import Inscreva from './src/Inscreva';
import CardapioCacarola from './src/CardapioCacarola';
import InscrevaseRestaurante from './src/InscrevaseRestaurante';
import Arroz from './src/Arroz';
import Pagar from './src/Pagar';
import Carrinho from './src/Carrinho';
import Esqueceu from './src/Esqueceu';
import FinalizarPedido from './src/FinalizarPedido';
import Feijao from './src/Feijao';
import Macarrao from './src/Macarrao';
import Localizacao from './src/Localizacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>    
        <Stack.Screen name="Login" 
        component={Login}
        options={{
          title:'',
          headerShown:false,
          headerStyle:{
            backgroundColor:"#4B0000"
          },
        }} />
        <Stack.Screen name="Inscreva" 
        component={Inscreva}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
          },
          headerTintColor: 'white'
        }} />

        <Stack.Screen name="Home" 
        component={Home}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="CardapioCacarola" 
        component={CardapioCacarola}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }}
         />
         <Stack.Screen name="Arroz" 
        component={Arroz}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }}
         />

      <Stack.Screen name="InscrevaseRestaurante"
        component={InscrevaseRestaurante}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="Pagar"
        component={Pagar}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="Carrinho"
        component={Carrinho}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="Esqueceu"
        component={Esqueceu}
        options={{
          title:'',
          headerShown:false,
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="FinalizarPedido"
        component={FinalizarPedido}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="Feijao"
        component={Feijao}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
         <Stack.Screen name="Macarrao"
        component={Macarrao}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="Localizacao"
        component={Localizacao}
        options={{
          title:'',
          headerStyle:{
            backgroundColor:'#4B0000',
            width:'100%'
          },
          headerTintColor: 'white'
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


