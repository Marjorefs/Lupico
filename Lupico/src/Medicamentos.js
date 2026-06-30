import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { styles } from './Style';
import Rodape from './componentes/Rodape';
import { supabase } from './services/supabase';

export default function Medicamentos({ navigation }) {

  const [nome, setNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [horario, setHorario] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function salvarMedicamento() {

    if (!nome || !dosagem || !horario) {
      setMensagem('Preencha os campos obrigatórios.');
      return;
    }

    const { error } = await supabase
      .from('medicamentos')
      .insert([
        {
          nome,
          dosagem,
          horario,
          observacoes,
        },
      ]);

    if (error) {
      setMensagem(error.message);
      return;
    }

    setMensagem('Medicamento salvo com sucesso!');

    setNome('');
    setDosagem('');
    setHorario('');
    setObservacoes('');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);
  }

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

          <Text style={styles.nomeHeader}>
            Lúpico
          </Text>

        </View>

        <Text style={styles.menuIcone}>
          ☰
        </Text>

      </View>

      {/* Conteúdo */}

      <View style={styles.cardTela}>

        <Text style={styles.tituloTela}>
          Medicamentos
        </Text>

        <Text style={styles.textoInfo}>
          Organize seus medicamentos e horários.
        </Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>
            {mensagem}
          </Text>
        )}

        <Text style={styles.label}>
          Nome do medicamento:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex.: Prednisona"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>
          Dosagem:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex.: 20 mg"
          value={dosagem}
          onChangeText={setDosagem}
        />

        <Text style={styles.label}>
          Horário:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex.: 08:00"
          value={horario}
          onChangeText={setHorario}
        />

        <Text style={styles.label}>
          Observações:
        </Text>

        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite alguma observação"
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={salvarMedicamento}
        >

          <Text style={styles.textoBotaoInicial}>
            Salvar medicamento
          </Text>

        </TouchableOpacity>

      </View>

      <Rodape navigation={navigation} />

    </View>
  );
}