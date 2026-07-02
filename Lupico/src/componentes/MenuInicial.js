import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Style';

export default function MenuInicial({ navigation, fecharMenu }) {
  return (
    <View style={styles.menuLateral}>
      <TouchableOpacity
        style={styles.itemMenu}
        onPress={() => {
          fecharMenu();
          navigation.navigate('Inicial');
        }}
      >
        <Text style={styles.textoMenu}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}