import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🦋 Lúpico</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>Efetuar login:</Text>

        <Text style={styles.label}>E-mail para login:</Text>
        <TextInput style={styles.input} keyboardType="email-address" />

        <Text style={styles.label}>Senha para login:</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Apresentacao')}
        >
          <Text style={styles.botaoTexto}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const roxo = '#b000e8';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: roxo,
    padding: 14,
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 16,
  },
  titulo: {
    color: roxo,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  label: {
    fontSize: 12,
    color: '#4b0082',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f7e6ff',
    borderWidth: 1,
    borderColor: roxo,
    borderRadius: 5,
    padding: 8,
    marginBottom: 14,
  },
  botao: {
    backgroundColor: roxo,
    padding: 12,
    borderRadius: 6,
    marginTop: 'auto',
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});