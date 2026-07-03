import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { styles } from './Style';
import { supabase } from './services/supabase';
import MenuInicial from './componentes/MenuInicial';
import { setUsuarioLogado } from './services/usuarioLogado';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  async function fazerLogin() {
    setMensagem('');

    if (!email || !senha) {
      setMensagem('Preencha o e-mail e a senha.');
      return;
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email.trim())
      .eq('senha', senha.trim());

    if (error) {
      setMensagem('Erro ao tentar fazer login.');
      return;
    }

    if (!data || data.length === 0) {
      setMensagem('E-mail ou senha incorretos.');
      return;
    }

    setUsuarioLogado(data[0]);
    setMensagem('Login realizado com sucesso!');

    setEmail('');
    setSenha('');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 800);
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

        <TouchableOpacity onPress={() => setMenuAberto(!menuAberto)}>
          <Text style={styles.menuIcone}>☰</Text>
        </TouchableOpacity>
      </View>

      {menuAberto && (
        <MenuInicial
          navigation={navigation}
          fecharMenu={() => setMenuAberto(false)}
        />
      )}

      <View style={styles.cardTela}>
        <Text style={styles.tituloTela}>Efetuar login:</Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

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