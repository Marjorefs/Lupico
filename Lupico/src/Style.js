import { StyleSheet } from 'react-native';

export const ROXO = '#893CDB';

export const styles = StyleSheet.create({
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
    marginTop: 30
  },

  conteudoInicial: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: 65,
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
  areaLogo: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 25,
},

nomeApp: {
  fontSize: 34,
  fontWeight: 'bold',
  color: ROXO,
  marginLeft: -70, 
  marginTop: -10,
},

logoInicial: {
  width: 220,
  height: 160,
},

  footerInicial: {
    height: 70,
    backgroundColor: ROXO,
  },
});