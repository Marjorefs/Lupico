import { View, Text, Image } from 'react-native';
import { styles } from './Style';
import Rodape from './componentes/Rodape';

export default function Medicamentos({ navigation }) {
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
        <Text style={styles.tituloTela}>Medicamentos</Text>
        <Text style={styles.textoInfo}>Aqui serão registrados os medicamentos em uso.</Text>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}