import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from './src/Inicial';
import Login from './src/Login';
import DadosPessoais from './src/DadosPessoais';
import Cadastro from './src/Cadastro';
import Home from './src/Home';
import Sintomas from './src/Sintomas';
import Receitas from './src/Receitas';
import Exames from './src/Exames';
import Medicamentos from './src/Medicamentos';
import Cuidados from './src/Cuidados';
import Perfil from './src/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sintomas" component={Sintomas} /> 
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="Exames" component={Exames} />
        <Stack.Screen name="Medicamentos" component={Medicamentos} />
        <Stack.Screen name="Cuidados" component={Cuidados} />
        <Stack.Screen name="Perfil" component={Perfil} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}