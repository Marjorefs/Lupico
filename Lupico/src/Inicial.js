import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Lúpico</Text>

      <Text style={styles.descricao}>
        O aplicativo Lúpico foi desenvolvido com o objetivo de auxiliar pacientes
        com Lúpus Eritematoso Sistêmico (LES) no acompanhamento de sua condição clínica.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoBotao}>
          Efetuar Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 40,
  },

  descricao: {
    textAlign: 'center',
    marginBottom: 50,
    color: '#555',
  },

  botao: {
    backgroundColor: '#9C27B0',
    width: '80%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});