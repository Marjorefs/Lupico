import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';
import { supabase } from './services/supabase';

export default function Receitas({ navigation }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [receitas, setReceitas] = useState([]);
  const [mensagem, setMensagem] = useState('');

  async function buscarReceitas() {
    const { data, error } = await supabase.storage
      .from('receitas')
      .list('', {
        limit: 100,
        sortBy: { column: 'created_at', order: 'desc' },
      });

    if (error) {
      setMensagem(error.message);
      return;
    }

    const listaFormatada = data.map((arquivo) => {
      const { data: urlData } = supabase.storage
        .from('receitas')
        .getPublicUrl(arquivo.name);

      return {
        nome: arquivo.name,
        url: urlData.publicUrl,
      };
    });

    setReceitas(listaFormatada);
  }

  async function selecionarReceita() {
    setMensagem('');

    const resultado = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      copyToCacheDirectory: true,
    });

    if (resultado.canceled) {
      return;
    }

    const arquivo = resultado.assets[0];
    const nomeArquivo = `${Date.now()}_${arquivo.name}`;

    const resposta = await fetch(arquivo.uri);
    const arquivoArrayBuffer = await resposta.arrayBuffer();

    const { error } = await supabase.storage
      .from('receitas')
      .upload(nomeArquivo, arquivoArrayBuffer, {
        contentType: 'application/pdf',
      });

    if (error) {
      setMensagem(error.message);
      return;
    }

    setMensagem('Receita enviada com sucesso!');
    buscarReceitas();
  }

  useEffect(() => {
    buscarReceitas();
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
        <Text style={styles.tituloTela}>Receitas</Text>

        <Text style={styles.textoInfo}>
          Selecione suas receitas em formato PDF.
        </Text>

        {mensagem !== '' && (
          <Text style={styles.mensagemSistema}>{mensagem}</Text>
        )}

        {receitas.length === 0 ? (
          <Text style={styles.textoInfo}>Nenhuma receita adicionada.</Text>
        ) : (
          receitas.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemArquivo}
              onPress={() => Linking.openURL(item.url)}
            >
              <Ionicons
                name="document-text-outline"
                size={26}
                color={ROXO}
              />

              <Text style={styles.nomeArquivo}>{item.nome}</Text>
            </TouchableOpacity>
          ))
        )}

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={selecionarReceita}
        >
          <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />

          <Text style={styles.textoBotaoAdicionar}>
            Adicionar Receita
          </Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}