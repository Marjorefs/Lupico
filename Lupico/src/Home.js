import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './Style';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral';

export default function Home({ navigation }) {
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

      <View style={styles.homeConteudo}>
        <Text style={styles.homeTitulo}>Olá, Marjore!</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardHome}
            onPress={() => navigation.navigate('Receitas')}
          >
            <Image
              source={require('../assets/imagens/receita.png')}
              style={styles.iconeHome}
              resizeMode="contain"
            />
            <Text style={styles.textoCardHome}>Receitas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardHome}
            onPress={() => navigation.navigate('Exames')}
          >
            <Image
              source={require('../assets/imagens/exames.png')}
              style={styles.iconeHome}
              resizeMode="contain"
            />
            <Text style={styles.textoCardHome}>Exames</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardHome}
            onPress={() => navigation.navigate('Medicamentos')}
          >
            <Image
              source={require('../assets/imagens/medicamento.png')}
              style={styles.iconeHome}
              resizeMode="contain"
            />
            <Text style={styles.textoCardHome}>Medicamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardHome}
            onPress={() => navigation.navigate('Cuidados')}
          >
            <Image
              source={require('../assets/imagens/sol.png')}
              style={styles.iconeHome}
              resizeMode="contain"
            />
            <Text style={styles.textoCardHome}>Cuidados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.caixaInfo}>
          <Text style={styles.textoInfo}>
            Lúpus não é leve só porque não conseguimos ver a dor.
          </Text>

          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() =>
              Linking.openURL(
                'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/lupus'
              )
            }
          >
            <Ionicons name="link-outline" size={30} color="#893CDB" />

            <Text style={styles.textoLink}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}