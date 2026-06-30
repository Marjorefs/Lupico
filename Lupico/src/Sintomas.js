import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import Rodape from './componentes/Rodape';
import { supabase } from './services/supabase';

export default function Sintomas({ navigation }) {
  const [humor, setHumor] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function salvarSintomas() {
    if (!humor || !sintomas) {
      setMensagem('Preencha como você está e os sintomas sentidos.');
      return;
    }

    const { error } = await supabase
      .from('sintomas')
      .insert([
        {
          humor: humor,
          sintomas: sintomas,
          observacoes: observacoes,
        },
      ]);

    if (error) {
      console.log('ERRO SINTOMAS:', error);
      setMensagem(error.message);
      return;
    }

    setMensagem('Sintomas registrados com sucesso!');

    setHumor('');
    setSintomas('');
    setObservacoes('');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);
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
        <Text style={styles.tituloTela}>Diário de sintomas</Text>

        <Text style={styles.textoInfo}>
          Registre como você está se sentindo hoje.
        </Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        <Text style={styles.label}>Como você está hoje?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Bem, regular, mal..."
          value={humor}
          onChangeText={setHumor}
        />

        <Text style={styles.label}>Sintomas sentidos:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Ex: dor nas articulações, cansaço, febre..."
          value={sintomas}
          onChangeText={setSintomas}
        />

        <Text style={styles.label}>Observações:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite alguma observação importante"
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={salvarSintomas}
        >
          <Text style={styles.textoBotaoInicial}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}