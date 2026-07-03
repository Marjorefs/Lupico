import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';
import { supabase } from './services/supabase';

const cuidadosPadrao = [
  'Evite exposição ao sol entre 10h e 16h.',
  'Utilize protetor solar diariamente.',
  'Mantenha uma alimentação saudável.',
  'Beba bastante água durante o dia.',
  'Durma pelo menos 8 horas por noite.',
];

export default function Cuidados({ navigation }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [novoCuidado, setNovoCuidado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [historico, setHistorico] = useState([]);

  async function buscarCuidados() {
    const { data, error } = await supabase
      .from('cuidados')
      .select('*')
      .order('data_registro', { ascending: false });

    if (error) {
      setMensagem(error.message);
      return;
    }

    setHistorico(data);
  }

  async function salvarCuidado() {
    if (!novoCuidado) {
      setMensagem('Digite um cuidado antes de salvar.');
      return;
    }

    const { error } = await supabase
      .from('cuidados')
      .insert([
        {
          cuidado: novoCuidado,
        },
      ]);

    if (error) {
      setMensagem(error.message);
      return;
    }

    setMensagem('Cuidado salvo com sucesso!');
    setNovoCuidado('');
    buscarCuidados();
  }

  useEffect(() => {
    buscarCuidados();
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
        <Text style={styles.tituloTela}>Cuidados</Text>

        <Text style={styles.textoInfo}>
          Algumas recomendações importantes para pacientes com Lúpus.
        </Text>

        {cuidadosPadrao.map((item, index) => (
          <View key={index} style={styles.cardCuidado}>
            <Ionicons name="checkmark-circle" size={24} color={ROXO} />
            <Text style={styles.textoCuidado}>{item}</Text>
          </View>
        ))}

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        <Text style={styles.label}>Adicionar novo cuidado:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
          placeholder="Digite um novo cuidado"
          value={novoCuidado}
          onChangeText={setNovoCuidado}
        />

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={salvarCuidado}
        >
          <Text style={styles.textoBotaoInicial}>Salvar cuidado</Text>
        </TouchableOpacity>

        <Text style={styles.tituloHistorico}>Histórico de cuidados</Text>

        {historico.length === 0 ? (
          <Text style={styles.textoInfo}>Nenhum cuidado cadastrado.</Text>
        ) : (
          historico.map((item) => (
            <View key={item.id} style={styles.cardHistorico}>
              <Text style={styles.labelPerfil}>Cuidado:</Text>
              <Text style={styles.valorPerfil}>{item.cuidado}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <Rodape navigation={navigation} />
    </View>
  );
}