import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from '../Style';

export default function Rodape({ navigation }) {
  return (
    <View style={styles.rodape}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="document-text" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="add-circle" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="person" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}