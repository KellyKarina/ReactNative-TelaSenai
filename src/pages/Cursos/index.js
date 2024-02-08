import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';


const img = require('../../assets/maxresdefault.jpg');
const img1 = require('../../assets/soldador.jpeg');
const img2 = require('../../assets/ti.webp');


export default function Cursos() {
  return (
    <ScrollView>
       <View style={styles.centalizarImg}>
       <Image style={{ width: 340, height: 200, marginTop: 50,}} source={img}></Image>
    <StatusBar style="light" />
  </View>
    <View style={styles.container}>
      <Text>ELETRÔNICA INDUSTRIAL</Text>
      <Text style={{marginTop: 20, }}>A Eletrônica é o ramo da ciência que estuda o uso de circuitos formados por componentes elétricos
         e eletrônicos, com o objetivo principal de representar, armazenar, transmitir ou processar informações, 
         além do controle de processos e servomecanismos.</Text>
      <StatusBar style="auto" />
    </View>


    <View style={styles.centalizarImg}>
       <Image style={{ width: 340, height: 200, marginTop: 50,}} source={img1}></Image>
    <StatusBar style="light" />
  </View>
  <View style={styles.container}>
      <Text>SOLDADOR AO ARCO ELÉTRICO</Text>
      <Text style={{marginTop: 20, }}>O curso de Soldagem ao Arco Elétrico TIG nas Posições Plana, 
      Horizontal e Vertical tem por objetivo o desenvolvimento de capacidades relativas a execução 
      de soldagem ao arco elétrico no processo TIG em aço carbono, nas posições plana (1F e 1G), 
      horizontal (2F e 2G) e vertical (3F e 3G) em juntas de ângulo e topo, preparando, montando, 
      soldando e realizando o controle visual e dimensional, seguindo procedimentos e normas técnicas, 
      de qualidade, meio ambiente e de saúde e segurança no trabalho.</Text>
      <StatusBar style="auto" />
    </View>


    <View style={styles.centalizarImg}>
       <Image style={{ width: 340, height: 200, marginTop: 50,}} source={img2}></Image>
    <StatusBar style="light" />
  </View>
  <View style={styles.container}>
      <Text>INFORMÁTICA PARA INTERNET</Text>
      <Text style={{marginTop: 20, }}>Compreender os processos da Tecnologia da Informação e Comunicação utilizados em um 
      ambiente empresarial e industrial. O curso tem como objetivo apresentar os principais temas relacionados 
      à infraestrutura de TI, serviços de redes, software, hardware, normas e padrões técnicos.</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centalizarImg:{
    alignItems: 'center',
  },
});