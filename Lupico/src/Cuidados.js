import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';

const cuidados = [
  'Evite exposição ao sol entre 10h e 16h.',
  'Utilize protetor solar diariamente.',
  'Mantenha uma alimentação saudável.',
  'Beba bastante água durante o dia.',
  'Durma pelo menos 8 horas por noite.',
];

export default function Cuidados({ navigation }) {
  const [menuAberto, setMenuAberto] = useState(false);

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
        <Text style={styles.tituloTela}>Cuidados</Text>

        <Text style={styles.textoInfo}>
          Algumas recomendações importantes para pacientes com Lúpus.
        </Text>

        {cuidados.map((item, index) => (
          <View key={index} style={styles.cardCuidado}>
            <Ionicons name="checkmark-circle" size={24} color={ROXO} />

            <Text style={styles.textoCuidado}>{item}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() =>
            Alert.alert(
              'Adicionar cuidado',
              'Em breve será possível cadastrar novos cuidados.'
            )
          }
        >
          <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />

          <Text style={styles.textoBotaoAdicionar}>Adicionar cuidado</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}