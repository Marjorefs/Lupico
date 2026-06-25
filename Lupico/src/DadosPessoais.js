import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DadosPessoais({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoArea}>
          <Ionicons name="flower" size={28} color="#fff" />
          <Text style={styles.headerText}>Lúpico</Text>
        </View>

        <Ionicons name="menu" size={30} color="#fff" />
      </View>

      <View style={styles.content}>
        <Text style={styles.titulo}>Dados pessoais:</Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput style={styles.input} placeholder="00/00/0000" />

        <Text style={styles.label}>Tipo sanguíneo:</Text>
        <TextInput style={styles.input} placeholder="Ex: A+" />

        <Text style={styles.label}>Medicamentos em uso:</Text>
        <TextInput
          style={styles.inputGrande}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Apresentacao')}
        >
          <Text style={styles.botaoTexto}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer} />
    </View>
  );
}

const roxo = '#b000e8';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: roxo,
    paddingTop: 18,
    paddingHorizontal: 14,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    color: roxo,
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  label: {
    color: '#4b0082',
    fontSize: 13,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: roxo,
    backgroundColor: '#f7e6ff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
  },

  inputGrande: {
    borderWidth: 1,
    borderColor: roxo,
    backgroundColor: '#f7e6ff',
    borderRadius: 6,
    padding: 10,
    height: 95,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: roxo,
    padding: 14,
    borderRadius: 8,
    marginTop: 'auto',
  },

  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  footer: {
    height: 45,
    backgroundColor: roxo,
  },
});