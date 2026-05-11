import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: '#E5BF3C',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    borderStartColor: 'red',
    paddingTop: 5,
    borderRadius: 5
  },
  Text:{
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#000000',
  }
});

export default styles;