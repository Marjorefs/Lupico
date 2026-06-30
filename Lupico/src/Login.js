import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import { styles } from './Style';
import { supabase } from './services/supabase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email.trim())
      .eq('senha', senha.trim());

    console.log('DATA:', data);
    console.log('ERROR:', error);

    if (error) {
      Alert.alert('Erro', 'Erro ao tentar fazer login.');
      return;
    }

    if (!data || data.length === 0) {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('Home');
  }

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
        <Text style={styles.tituloTela}>Efetuar login:</Text>

        <Text style={styles.label}>E-mail para login:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha para login:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={fazerLogin}
        >
          <Text style={styles.textoBotaoInicial}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerInicial} />
    </View>
  );
}