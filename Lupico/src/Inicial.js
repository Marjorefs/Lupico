import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from './Style';

export default function Inicial({ navigation }) {
  return (
    <View style={styles.containerInicial}>

      <View style={styles.headerInicial}>
        <Image
          source={require('../assets/imagens/borboleta.png')}
          style={styles.borboleta}
          resizeMode="contain"
        />
      </View>

      <View style={styles.conteudoInicial}>
        <View style={styles.areaLogo}>
          <Image
            source={require('../assets/imagens/logo.jpeg')}
            style={styles.logoInicial}
            resizeMode="contain"
          />

          <Text style={styles.nomeApp}>Lúpico</Text>
        </View>

        <View style={styles.caixaDescricao}>
          <Text style={styles.textoDescricao}>
            O aplicativo Lúpico foi desenvolvido com o objetivo de auxiliar pacientes
            diagnosticados com Lúpus Eritematoso Sistêmico (LES) no acompanhamento
            de sua rotina de cuidados diários.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoInicial}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotaoInicial}>Efetuar Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoInicial}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textoBotaoInicial}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerInicial} />

    </View>
  );
}