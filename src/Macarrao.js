import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Button, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import arrozbranco from '../assets/arrozbranco2.png'
import Icon from'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Fontisto';
import feijaopreto from '../assets/feijaopreto.png'
import macarrao from '../assets/macarraoTomate.png'

const { width, height } = Dimensions.get('screen')



export default function Arroz({ navigation }) {

  const [numero1, setNumero1] = useState(100)
  const [resultado, setResultado] = useState(50)
  const [sinal, setSinal] = useState('+')


  function som() {
    setResultado(parseFloat(resultado) + parseFloat(50))
    setSinal("+")
    if (resultado >= 500) {
      setResultado(500)
    }
  }

  function sub() {
    setResultado(parseFloat(resultado) - parseFloat(50))
    setSinal("-")

    if (resultado <= 50) {
      setResultado(50)
    }
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.arrozbranco}
        source={macarrao}>
      </Image>
      <View style={styles.BordaArroz}/>
      <View style={styles.texto1}>
        <Text style={styles.estiloTexto}>Macarrão</Text>
      </View>
      <View style={styles.FundoContador}>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={sub}>-</TouchableOpacity>
          <View style={styles.resultado}>{resultado}g</View>
          <TouchableOpacity style={styles.botao} onPress={som}>+</TouchableOpacity>
        </View>
      </View>
      <View style={styles.RS}>
        <Text style={styles.Lrs}>RS: </Text>
        <Text style={styles.Lr}>{(resultado*40)/500}</Text>
      </View>
      <View style={styles.AnotacaoL}>
        <Text>Anotação</Text>
        <Icon style={styles.Icon1}name= "comment-o" size={15} color="#000"  />
      </View>
      <View style={styles.Anotacao}>
        <TextInput style={styles.InputAnotacao} multiline={true} maxLength={200}></TextInput>
      </View>
      <View style={styles.Bt1P}>
        <TouchableOpacity style={styles.bt1}onPress={() => navigation.navigate('')}>
          <Text style={styles.Comprar}>Comprar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bt1P}>
        <TouchableOpacity style={styles.bt2}onPress={() => navigation.navigate('FinalizarPedido')}>
          <Text style={styles.Comprar}>Ir para Carrinho</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carrinho}>
          <Icon2.Button
              name="shopping-basket"
              size={20}
              color="#900"
              backgroundColor={'white'}
              onPress={() => navigation.navigate('FinalizarPedido')}>
            </Icon2.Button>
          </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    color: 'white',
    fontSize: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B0000',
    borderRadius:2,
    width: 15,

  },
  resultado: {
    alignItems: 'center',
    fontSize: '20px',
    width: '20%',

  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  arrozbranco: {
    width: "100%",
    height: '50%',
    alignContent: 'center',
    alignItems: 'center',
  },
  BordaArroz: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    padding: 20,
  },
  texto1: {
    width:"70%",
    alignSelf:'flex-start'
  },
  estiloTexto: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  FundoContador: {
    backgroundColor: 'white',
    width: '70%',
    height: 50,
    display: 'flex',
    alignSelf:'flex-start',
    flexDirection: 'row',
    border: '1px solid white',
    paddingLeft:10,
    
  },
  EstiloResultado: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',

  },
  botoes: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginLeft: '5%',
    width: '100%',
  },
  RS:{
    alignSelf:'flex-start',
    paddingLeft:22,
    flexDirection:'row',
  },
  Lr:{
    color:'green',
  },
  Anotacao:{
    width:'80%',
    height:'10%',
    border: '1px solid black',
    display: 'flex',
    borderRadius:6
  },
  AnotacaoL:{
    alignSelf:'flex-start',
    paddingLeft:20,
    padding:5,
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'30%'
  },
  InputAnotacao:{
    color:'gray',
    width:298,
    height:100,
    alignContent:'center'
  },
  Bt1P:{
    padding:10

  },
  bt1:{
    backgroundColor:'#4B0000',
    width:300,
    height:25,
    textAlign:'center',
    borderRadius:6
  },
  Comprar:{
    color:"white"
  },
  bt2:{
    backgroundColor:'gray',
    width:300,
    height:25,
    textAlign:'center',
    borderRadius:6
  },
  Icon1:{
    justifyContent:'space-between'
  },
  carrinho:{
    bottom:'30%',
    left:'35%'
    },
  




});