import React from 'react'
import {  Image } from "react-native";
import { StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import cacarola from '../assets/cacarola.png'
import sabores from  '../assets/sabores.png'
import rest from '../assets/rest.png'


export default function Home({navigation}) {
    return (
      
      <View style={styles.container}>
        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.cacarola}
            source={cacarola}>
            </Image>
          <View style={styles.Text1}>
            <Text style={styles.caca} onPress={() => navigation.navigate('CardapioCacarola')}>Caçarola  Restaurante</Text>
            <Text style={styles.aberto}>ABERTO</Text>
            <Text style={styles.km}>1,5KM</Text>
          </View>
         
          </View>

        </View>

        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.cacarola}
            source={sabores}>
            </Image>
          <View style={styles.Text1}>
            <Text style={styles.caca} onPress={() => navigation.navigate('CardapioCacarola')}>Fábrica De Sabores</Text>
            <Text style={styles.aberto}>ABERTO</Text>
            <Text style={styles.km}>3KM</Text>
          </View>  
          </View>
 
        </View>
        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.cacarola}
            source={rest}>
            </Image>
          <View style={styles.Text1}>
            <Text style={styles.caca} onPress={() => navigation.navigate('CardapioCacarola')}>Parrilla</Text>
            <Text style={styles.aberto}>ABERTO</Text>
            <Text style={styles.km}>5KM</Text>
          </View>  
          </View>

        </View>
        <View style={styles.carrinho}>
          <Icon.Button
              name="shopping-basket"
              size={20}
              color="#900"
              backgroundColor={'white'}
              onPress={() => navigation.navigate('FinalizarPedido')}>
            </Icon.Button>
          </View> 
          
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
      imagem:{
      width:70,
      height:83,
         
    }, 
    cacarola:{
      width:70,
      height:83,
      marginBottom:600
    },
    alinhamento:{
      borderBottomWidth:2,
      borderBottomColor:'gray',
      borderRadius:10,
      top: '-30%',
      right:'10',
      width:'100%',
      
    },
    alinhamentoSabores:{
      borderBottomWidth:2,
      borderBottomColor:'gray',
      borderRadius:10,
      top: '-30%',
      right:'10',
      width:'100%',

    },
    Text1:{
      width:80,
      marginLeft:80,
      marginTop:-683,
      flexDirection:'column',
      
    },
    caca:{
      fontSize:20,
      width:200
    },
    aberto:{
      color:'green',
      flexDirection:'row'
    },
    km:{
      color:'gray',
      flexDirection:'row'

    },
    carrinho:{
      bottom:'20%',
      left:'35%'
      },

  });