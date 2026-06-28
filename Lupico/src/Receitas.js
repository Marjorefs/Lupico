import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';

const receitas = [
  'Receita Reumatologista.pdf',
  'Receita Dermatologista.pdf',
  'Receita Oftalmologista.pdf',
];

export default function Receitas({ navigation }) {
  return (
    <View style={styles.containerTela}>
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

      <View style={styles.cardTela}>
        <Text style={styles.tituloTela}>Receitas</Text>

        <Text style={styles.textoInfo}>
          Anexe suas receitas em formato PDF aqui.
        </Text>

        {receitas.map((item, index) => (
          <View style={styles.itemArquivo} key={index}>
            <Ionicons name="document-text-outline" size={26} color={ROXO} />
            <Text style={styles.nomeArquivo}>{item}</Text>
          </View>
        ))}

        <TouchableOpacity 
          style={styles.botaoAdicionar}
          onPress={() => Alert.alert('Adicionar Receita', 'Em breve será possível anexar uma receita em PDF.')}>
          <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />
          <Text style={styles.textoBotaoAdicionar}>Adicionar Receita</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}