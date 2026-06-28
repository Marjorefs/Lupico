import { View, Text, Image } from 'react-native';
import { styles } from './Style';
import Rodape from './componentes/Rodape';

export default function Exames({ navigation }) {
  return (
    <View style={styles.containerTela}>
      <View style={styles.headerTela}>
        <View style={styles.logoHeader}>
          <Image source={require('../assets/imagens/borboleta.png')} style={styles.borboletaPequena} resizeMode="contain" />
          <Text style={styles.nomeHeader}>Lúpico</Text>
        </View>
        <Text style={styles.menuIcone}>☰</Text>
      </View>

      <View style={styles.cardTela}>
        <Text style={styles.tituloTela}>Exames</Text>
        <Text style={styles.textoInfo}>Anexe o seu exame em arqui PDF aqui.</Text>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}