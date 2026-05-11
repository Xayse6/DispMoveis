import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 20,
  },
  ButtonContainer: {
    backgroundColor: '#808080',
    width: '30%',
    padding:10,
    marginBottom:10,
    borderRadius:20,
    alignItems:"center",
    
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