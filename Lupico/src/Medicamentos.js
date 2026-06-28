import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, ROXO } from './Style';
import Rodape from './componentes/Rodape';

const medicamentos = [
  {
    nome: 'Prednisona',
    dose: '20 mg',
    horario: '08:00',
  },
  {
    nome: 'Hidroxicloroquina',
    dose: '400 mg',
    horario: '13:00',
  },
];

export default function Medicamentos({ navigation }) {
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
        <Text style={styles.tituloTela}>Medicamentos</Text>

        <Text style={styles.textoInfo}>
          Organize seus medicamentos, doses e horários de uso.
        </Text>

        {medicamentos.map((item, index) => (
          <View style={styles.cardMedicamento} key={index}>
            <View style={styles.linhaMedicamento}>
              <Ionicons name="medical-outline" size={26} color={ROXO} />
              <Text style={styles.nomeMedicamento}>{item.nome}</Text>
            </View>

            <Text style={styles.detalheMedicamento}>Dose: {item.dose}</Text>
            <Text style={styles.detalheMedicamento}>Horário: {item.horario}</Text>
          </View>
        ))}

        <TouchableOpacity 
          style={styles.botaoAdicionar}
          onPress={() => Alert.alert('Adicionar Receita', 'Em breve será possível anexar uma receita em PDF.')}
>
          <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />
          <Text style={styles.textoBotaoAdicionar}>Adicionar medicamento</Text>
        </TouchableOpacity>
      </View>

      <Rodape navigation={navigation} />
    </View>
  );
}