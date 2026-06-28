import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import Rodape from './componentes/Rodape';

export default function Perfil({ navigation }) {
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

        <View style={styles.caixaPerfil}>
          <Text style={styles.labelPerfil}>Nome:</Text>
          <Text style={styles.valorPerfil}>Marjore</Text>

          <Text style={styles.labelPerfil}>E-mail:</Text>
          <Text style={styles.valorPerfil}>usuario@email.com</Text>

          <Text style={styles.labelPerfil}>Data de nascimento:</Text>
          <Text style={styles.valorPerfil}>00/00/0000</Text>

          <Text style={styles.labelPerfil}>Tipo sanguíneo:</Text>
          <Text style={styles.valorPerfil}>O+</Text>

          <Text style={styles.labelPerfil}>Medicamentos em uso:</Text>
          <Text style={styles.valorPerfil}>Prednisona, Vitamina D</Text>
        </View>

        <TouchableOpacity style={styles.botaoFormulario}>
          <Text style={styles.textoBotaoInicial}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}