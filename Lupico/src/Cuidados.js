import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';

const cuidados = [
  'Evite exposição ao sol entre 10h e 16h.',
  'Utilize protetor solar diariamente.',
  'Mantenha uma alimentação saudável.',
  'Beba bastante água durante o dia.',
  'Durma pelo menos 8 horas por noite.',
];

export default function Cuidados({ navigation }) {
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
          Cuidados
        </Text>

        <Text style={styles.textoInfo}>
          Algumas recomendações importantes para pacientes com Lúpus.
        </Text>

        {cuidados.map((item, index) => (
          <View
            key={index}
            style={styles.cardCuidado}
          >

            <Ionicons
              name="checkmark-circle"
              size={24}
              color={ROXO}
            />

            <Text style={styles.textoCuidado}>
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
            Adicionar cuidado
          </Text>

        </TouchableOpacity>

      </View>

      <Rodape navigation={navigation} />

    </View>
  );
}