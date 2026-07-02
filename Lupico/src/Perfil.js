import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './Style';
import Rodape from './componentes/Rodape';
import { supabase } from './services/supabase';

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState('');

  async function buscarUsuario() {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .order('id', { ascending: false })
      .limit(1);

    if (error) {
      setMensagem('Erro ao buscar dados do perfil.');
      return;
    }

    if (data && data.length > 0) {
      setUsuario(data[0]);
    } else {
      setMensagem('Nenhum usuário encontrado.');
    }
  }

  useEffect(() => {
    buscarUsuario();
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

        <Text style={styles.menuIcone}>☰</Text>
      </View>

      <View style={styles.cardTela}>
        <Text style={styles.tituloTela}>Meu perfil</Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        {usuario && (
          <View style={styles.caixaPerfil}>
            <Text style={styles.labelPerfil}>Nome:</Text>
            <Text style={styles.valorPerfil}>{usuario.nome}</Text>

            <Text style={styles.labelPerfil}>E-mail:</Text>
            <Text style={styles.valorPerfil}>{usuario.email}</Text>

            <Text style={styles.labelPerfil}>Data de nascimento:</Text>
            <Text style={styles.valorPerfil}>{usuario.data_nascimento}</Text>

            <Text style={styles.labelPerfil}>Tipo sanguíneo:</Text>
            <Text style={styles.valorPerfil}>{usuario.tipo_sanguineo}</Text>

            <Text style={styles.labelPerfil}>Medicamentos em uso:</Text>
            <Text style={styles.valorPerfil}>{usuario.medicamentos}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.botaoFormulario}
          onPress={buscarUsuario}
        >
          <Text style={styles.textoBotaoInicial}>Atualizar perfil</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}