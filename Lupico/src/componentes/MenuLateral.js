import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Style';

export default function MenuLateral({ navigation, fecharMenu }) {
  return (
    <View style={styles.menuLateral}>
      <TouchableOpacity
        style={styles.itemMenu}
        onPress={() => {
          fecharMenu();
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.textoMenu}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemMenu}
        onPress={() => {
          fecharMenu();
          navigation.navigate('Perfil');
        }}
      >
        <Text style={styles.textoMenu}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemMenu}
        onPress={() => {
          fecharMenu();
          navigation.navigate('Inicial');
        }}
      >
        <Text style={styles.textoMenu}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}