import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Apresentacao({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoArea}>
          <Ionicons name="flower" size={28} color="#fff" />
          <Text style={styles.headerTitle}>Lúpico</Text>
        </View>

        <Ionicons name="menu" size={28} color="#fff" />
      </View>

      <View style={styles.content}>
        <Text style={styles.titulo}>Apresentação</Text>

        <Text style={styles.texto}>
          O aplicativo Lúpico foi desenvolvido com o objetivo de auxiliar
          pacientes diagnosticados com Lúpus Eritematoso Sistêmico (LES)
          no acompanhamento de sua rotina de cuidados diários.
        </Text>

        <Text style={styles.texto}>
          Por meio do aplicativo, o usuário poderá organizar informações
          importantes sobre sintomas, medicamentos, exames e cuidados,
          contribuindo para um acompanhamento mais prático e acessível.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Inicial')}
        >
          <Text style={styles.botaoTexto}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Ionicons name="home" size={24} color="#7e22ce" />
        <Ionicons name="person" size={24} color="#7e22ce" />
        <Ionicons name="add-circle" size={30} color="#7e22ce" />
        <Ionicons name="settings" size={24} color="#7e22ce" />
      </View>
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

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    color: roxo,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 22,
    color: '#333',
    marginBottom: 16,
  },

  botao: {
    backgroundColor: roxo,
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },

  botaoTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#f3e8ff',
  },
});