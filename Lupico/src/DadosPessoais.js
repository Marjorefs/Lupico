import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Style';

export default function DadosPessoais({ navigation }) {
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
          Dados pessoais
        </Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="00/00/0000"
        />

        <Text style={styles.label}>Tipo sanguíneo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: O+"
        />

        <Text style={styles.label}>Medicamentos em uso:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite os medicamentos utilizados"
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotaoInicial}>
            Confirmar
          </Text>
        </TouchableOpacity>

      </View>

      {/* Rodapé */}
      <View style={styles.footerInicial} />

    </View>
  );
}