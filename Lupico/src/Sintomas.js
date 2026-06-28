import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './Style';
import Rodape from './componentes/Rodape';

export default function Sintomas({ navigation }) {
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
        <Text style={styles.tituloTela}>Diário de sintomas</Text>

        <Text style={styles.textoInfo}>
          Registre como você está se sentindo hoje.
        </Text>

        <Text style={styles.label}>Como você está hoje?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Bem, regular, mal..."
        />

        <Text style={styles.label}>Sintomas sentidos:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Ex: dor nas articulações, cansaço, febre..."
        />

        <Text style={styles.label}>Observações:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite alguma observação importante"
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={() =>
            Alert.alert(
              'Sintomas registrados',
              'Em breve essas informações serão salvas no Supabase.'
            )
          }
        >
          <Text style={styles.textoBotaoInicial}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}