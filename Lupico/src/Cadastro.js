import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './Style';

export default function Cadastro({ navigation }) {
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
        <Text style={styles.tituloTela}>Fazer cadastro:</Text>

        <Text style={styles.label}>E-mail para login:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
        />

        <Text style={styles.label}>Senha para login:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={() => navigation.navigate('DadosPessoais')}
        >
          <Text style={styles.textoBotaoInicial}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerInicial} />
    </View>
  );
}