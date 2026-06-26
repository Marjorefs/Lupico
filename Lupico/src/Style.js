import { StyleSheet } from 'react-native';

export const ROXO = '#893CDB';

export const styles = StyleSheet.create({
  
  //Tela inicial
  
  containerInicial: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerInicial: {
    height: 86,
    backgroundColor: ROXO,
    justifyContent: 'center',
    paddingHorizontal: 22,
  },

  borboleta: {
    width: 58,
    height: 58,
    marginTop: 30,
  },

  conteudoInicial: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: 65,
  },

  areaLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  logoInicial: {
    width: 220,
    height: 160,
  },

  nomeApp: {
    fontSize: 34,
    fontWeight: 'bold',
    color: ROXO,
    marginLeft: -70,
    marginTop: -10,
  },

  caixaDescricao: {
    width: '100%',
    backgroundColor: '#F7E9FF',
    borderWidth: 1.5,
    borderColor: ROXO,
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    marginBottom: 38,
  },

  textoDescricao: {
    textAlign: 'center',
    color: '#2F2437',
    fontSize: 16,
    lineHeight: 25,
  },

  botaoInicial: {
    backgroundColor: ROXO,
    width: '100%',
    paddingVertical: 17,
    borderRadius: 14,
    marginBottom: 18,
    alignItems: 'center',
  },

  textoBotaoInicial: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerInicial: {
    height: 70,
    backgroundColor: ROXO,
  },

     //Tela login

  containerTela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerTela: {
    height: 86,
    backgroundColor: ROXO,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  headerTexto: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  borboletaPequena: {
    width: 45,
    height: 45,
    marginTop: 30,
  },

  cardTela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 45,
  },

  tituloTela: {
    color: ROXO,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    marginTop: 30,
  },

  label: {
    fontSize: 14,
    color: '#4B0082',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F7E9FF',
    borderWidth: 1.5,
    borderColor: ROXO,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 18,
  },

  botaoFormulario: {
    backgroundColor: ROXO,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 'auto',
    marginBottom: 25,
    alignItems: 'center',
  },

  //Logo cabeçalho

  logoHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

nomeHeader: {
  color: '#FFFFFF',
  fontSize: 24,
  fontWeight: 'bold',
  marginLeft: 8,
  marginTop: 30,
},

menuIcone: {
  color: '#FFFFFF',
  fontSize: 32,
  fontWeight: 'bold',
  marginTop: 30,
},
});

