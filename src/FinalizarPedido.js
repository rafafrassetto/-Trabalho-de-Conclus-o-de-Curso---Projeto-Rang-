import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity,Image, Linking} from 'react-native';
import arroz3 from '../assets/arroz3.png'
import feijaopreto from '../assets/feijaopreto.png'
import macarraoTomate from  '../assets/macarraoTomate.png'



export default function FinalizarPedido({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.arrozbranco}
            source={arroz3}>
            </Image>
          <View style={styles.Text2}>
            <Text style={styles.caca} onPress={() => navigation.navigate('')}>Arroz Branco</Text>
            <Text style={styles.aberto}>+ 200g</Text>
          </View>  
          </View>
          
          
        </View>

        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.beef}
            source={feijaopreto}>
            </Image>
          <View style={styles.Textcacarola}>
            <Text style={styles.caca} onPress={() => navigation.navigate('')}>Feijão Preto</Text>
            <Text style={styles.aberto}>+ 300g</Text>
          </View>  
          </View>
          
        </View>

        <View style={styles.alinhamento}>
          <View style={styles.imagem}>
            <Image 
            style={styles.beef}
            source={macarraoTomate}>
            </Image>
          <View style={styles.Texthouse}>
            <Text style={styles.caca} onPress={() => navigation.navigate('')}>Macarrão</Text>
            <Text style={styles.aberto}>+ 100g</Text>
          </View>  
          </View>
          </View>
          <View style={styles.Bt1P}>
        <TouchableOpacity style={styles.bt1}onPress={() => navigation.navigate('')}>
          <Text style={styles.Comprar}>Total : R$38,00</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Bt1P}>
        <TouchableOpacity style={styles.bt1}onPress={() => navigation.navigate('')}>
          <Text style={styles.Comprar}>🕗    :    45 min</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bt2P}>
        <TouchableOpacity style={styles.bt1}onPress={() => Linking.openURL('https://chat.whatsapp.com/DXN4NzqEqID7BW6QCnZEKf')}>
          <Text style={styles.Comprar}>☎️     Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
     
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center', 
      backgroundColor: 'white',
      justifyContent: 'center',
      flex:1
      
    },
      imagem:{
      width:70,
      height:83,  
         
    }, 
    cacarola:{
      width:99,
      height:99,
      marginBottom:600,
      right:'3%',
      top:'10%'

    },
    aberto:{
      width:400,
      color:'green',
      flexDirection:'row'
    },
    arrozbranco:{
      width:70,
      height:70,
      top:'15%'
      
    },
    beef:{
      width:60,
      height:60,
      marginBottom:600,
      right:'10%',
      left:'10%',
      top:'15%'
  
      },
    alinhamento:{
      borderBottomWidth:2,
      borderBottomColor:'gray',
      borderRadius:10,
      right:'10',
      width:'100%',
      top:-210,
      
    },
    alinhamentoSabores:{
      borderBottomWidth:2,
      borderBottomColor:'gray',
      borderRadius:10,
      top: '-33%',
      right:'10',
      width:'100%',

    },
    Text1:{
      width:80,
      marginLeft:80,
      marginTop:-683,
      flexDirection:'column',
      right:'-40%'
      
    },
    Text2:{
      width:110,
      height:83,
      marginBottom:600,
      right:'10%',
      top:'-60%',
      marginLeft:115
      
      
    },
    Textcacarola:{
      width:60,
      marginLeft:80,
      marginTop:-683,
      flexDirection:'column',
      right:'-40%',
      top:'45%'
      
    },
    Texthouse:{
      width:60,
      marginLeft:80,
      marginTop:-683,
      flexDirection:'column',
      right:'-40%',
      top:'45%'
      
    },
    caca:{
      fontSize:20,
      width:200
    },

    km:{
      width:200,
      color:'gray',
      flexDirection:'row'

    },
    Bt1P:{
      padding:10,
      top:60
  
    },
    Bt2P:{
      padding:9,
      top:200
  
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
    }

  });