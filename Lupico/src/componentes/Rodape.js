import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Style';

export default function Rodape({ navigation }) {
  return (
    <View style={styles.rodape}>

      {/* Home */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name="home"
          size={28}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      {/* Receitas */}
      <TouchableOpacity onPress={() => navigation.navigate('Receitas')}>
        <Ionicons
          name="document-text"
          size={28}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      {/* Adicionar Sintomas */}
      <TouchableOpacity onPress={() => navigation.navigate('Sintomas')}>
        <Ionicons
          name="add-circle"
          size={34}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Ionicons
          name="person"
          size={28}
          color="#FFFFFF"
        />
      </TouchableOpacity>

    </View>
  );
}