import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from './src/Inicial';
import Login from './src/Login';
import DadosPessoais from './src/DadosPessoais';
import Cadastro from './src/Cadastro';
import Apresentacao from './src/Apresentacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
        <Stack.Screen name="Apresentacao" component={Apresentacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}