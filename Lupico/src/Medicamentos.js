import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { styles } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';
import { supabase } from './services/supabase';

export default function Medicamentos({ navigation }) {
  const [nome, setNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [horario, setHorario] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const [historico, setHistorico] = useState([]);

  async function buscarHistorico() {
    const { data, error } = await supabase
      .from('medicamentos')
      .select('*')
      .order('data_registro', { ascending: false });

    if (error) {
      setMensagem(error.message);
      return;
    }

    setHistorico(data);
  }

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

    buscarHistorico();
  }

  useEffect(() => {
    buscarHistorico();
  }, []);

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
        <MenuLateral
          navigation={navigation}
          fecharMenu={() => setMenuAberto(false)}
        />
      )}

      <ScrollView style={styles.cardTela}>
        <Text style={styles.tituloTela}>Medicamentos</Text>

        <Text style={styles.textoInfo}>
          Organize seus medicamentos e horários.
        </Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        <Text style={styles.label}>Nome do medicamento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Prednisona"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Dosagem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 20 mg"
          value={dosagem}
          onChangeText={setDosagem}
        />

        <Text style={styles.label}>Horário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 08:00"
          value={horario}
          onChangeText={setHorario}
        />

        <Text style={styles.label}>Observações:</Text>
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
          <Text style={styles.textoBotaoInicial}>Salvar medicamento</Text>
        </TouchableOpacity>

        <Text style={styles.tituloHistorico}>Histórico de medicamentos</Text>

        {historico.length === 0 ? (
          <Text style={styles.textoInfo}>Nenhum medicamento cadastrado.</Text>
        ) : (
          historico.map((item) => (
            <View key={item.id} style={styles.cardHistorico}>
              <Text style={styles.labelPerfil}>Medicamento:</Text>
              <Text style={styles.valorPerfil}>{item.nome}</Text>

              <Text style={styles.labelPerfil}>Dosagem:</Text>
              <Text style={styles.valorPerfil}>{item.dosagem}</Text>

              <Text style={styles.labelPerfil}>Horário:</Text>
              <Text style={styles.valorPerfil}>{item.horario}</Text>

              <Text style={styles.labelPerfil}>Observações:</Text>
              <Text style={styles.valorPerfil}>
                {item.observacoes || 'Sem observações'}
              </Text>
            </View>
          ))
        )}
      </ScrollView>

      <Rodape navigation={navigation} />
    </View>
  );
}