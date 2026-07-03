import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';
import { getUsuarioLogado } from './services/usuarioLogado';

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  function buscarUsuario() {
    const usuarioAtual = getUsuarioLogado();

    if (usuarioAtual) {
      setUsuario(usuarioAtual);
      setMensagem('');
      return;
    }

    setMensagem('Nenhum usuário logado encontrado.');
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