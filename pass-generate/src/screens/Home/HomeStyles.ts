import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#757514e9',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoContainer: {
    flexDirection: 'column',
    borderColor: 'fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#1e1982'
  },

  InputContainer:{
    width: '80%',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 5
  }
});

export default styles;