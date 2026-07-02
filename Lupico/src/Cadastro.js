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

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  async function cadastrar() {
    setMensagem('');

    if (!nome || !email || !senha) {
      setMensagem('Preencha nome, e-mail e senha.');
      return;
    }

    const { error } = await supabase
      .from('usuarios')
      .insert([
        {
          nome,
          email,
          senha,
          data_nascimento: dataNascimento,
          tipo_sanguineo: tipoSanguineo,
          medicamentos,
        },
      ]);

    if (error) {
      setMensagem(error.message);
      return;
    }

    setMensagem('Cadastro realizado com sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
    setDataNascimento('');
    setTipoSanguineo('');
    setMedicamentos('');

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
        <Text style={styles.tituloTela}>Fazer cadastro</Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="00/00/0000"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <Text style={styles.label}>Tipo sanguíneo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: O+"
          value={tipoSanguineo}
          onChangeText={setTipoSanguineo}
        />

        <Text style={styles.label}>Medicamentos em uso:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite os medicamentos utilizados"
          value={medicamentos}
          onChangeText={setMedicamentos}
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={cadastrar}
        >
          <Text style={styles.textoBotaoInicial}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerInicial} />
    </View>
  );
}