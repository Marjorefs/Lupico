import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';

const exames = [
  'Hemograma Completo.pdf',
  'Exame de Urina.pdf',
  'Anti-DNA.pdf',
];

export default function Exames({ navigation }) {
  return (
    <View style={styles.containerTela}>

      {/* Cabeçalho */}
      <View style={styles.headerTela}>
        <View style={styles.logoHeader}>
          <Image
            source={require('../assets/imagens/borboleta.png')}
            style={styles.borboletaPequena}
            resizeMode="contain"
          />

          <Text style={styles.nomeHeader}>Lúpico</Text>
        </View>

        <Text style={styles.menuIcone}>☰</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.cardTela}>

        <Text style={styles.tituloTela}>
          Exames
        </Text>

        <Text style={styles.textoInfo}>
          Anexe seus exames em formato PDF.
        </Text>

        {exames.map((item, index) => (
          <View key={index} style={styles.itemArquivo}>

            <Ionicons
              name="flask-outline"
              size={26}
              color={ROXO}
            />

            <Text style={styles.nomeArquivo}>
              {item}
            </Text>

          </View>
        ))}

        <TouchableOpacity 
        style={styles.botaoAdicionar}        
        onPress={() => Alert.alert('Adicionar Receita', 'Em breve será possível anexar uma receita em PDF.')}
>

          <Ionicons
            name="add-circle-outline"
            size={24}
            color="#FFFFFF"
          />

          <Text style={styles.textoBotaoAdicionar}>
            Adicionar Exame
          </Text>

        </TouchableOpacity>

      </View>

      <Rodape navigation={navigation} />

    </View>
  );
}